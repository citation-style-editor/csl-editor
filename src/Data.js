"use strict";

// Uses CSLEDIT_storage to store the current csl style
//
// Supports the following actions:
// 
// - New style
// - Load from CSL XML
// - Add node
// - Delete node
// - Amend node
// - Move node

define([	'src/uiConfig', // TODO: remove this dependency
			'src/CslNode',
			'src/Iterator',
			'src/cslParser',
			'src/storage',
			'src/options',
			'src/urlUtils',
			'src/cslStyles',
			'src/debug'
		],
		function (
			CSLEDIT_uiConfig,
			CSLEDIT_CslNode,
			CSLEDIT_Iterator,
			CSLEDIT_cslParser,
			CSLEDIT_storage,
			CSLEDIT_options,
			CSLEDIT_urlUtils,
			CSLEDIT_cslStyles,
			debug
		) {
	return function (CSL_DATA, _requiredNodes /*optional*/, updateTime /*optional*/) {
		var viewControllers = [],
			callbacksEnabled = true,
			requiredNodes = _requiredNodes || [],
			
			// TODO: decide better place to put styleInfoOrder.
			//       Maybe add this general functionality to the schema for
			//       other nodes too and place the hard-coded list(s) in schemaOptions.
			//
			//       Currently only used when converting to/from CSL code, not as a
			//       constraint while using the editor, due to difficulty of
			//       implementation.
			styleInfoOrder = [
				"title",
				"id",
				'link rel="self"',
				'link rel="template"',
				'link rel="documentation"',
				"author",
				"contributor",
				"category citation-format",
				"category field",
				"issn",
				"summary",
				"updated",
				"rights"
			];

		// This returns a JSON object representing the whole CSL tree
		// exactly as it's stored in local storage
		//
		// Each node of the tree contains the same member variables as CSLEDIT_CslNode
		var get = function () {
			return CSLEDIT_storage.getItemJson(CSL_DATA);
		};

		// This sets the JSON object representing the whole CSL tree
		// as it's stored in local storage
		//
		// Each node of the tree contains the same member variables as CSLEDIT_CslNode
		var set = function (cslData) {
			var updatedNode,
				iter,
				index,
				node;

			if (updateTime) {
				// update 'style/info/updated'
				updatedNode = getNodesFromPath('style/info/updated', cslData)[0];
				if (typeof(updatedNode) === "undefined") {
					debug.log("WARNING: no style/info/updated node");
				} else {
					// write timestamp to updated node
					iter = new CSLEDIT_Iterator(cslData);
					index = 0;
					while (iter.hasNext()) {
						node = iter.next();
						if (index === updatedNode.cslId) {	
							node.textValue = (new Date()).toISOString().replace(/\.[0-9]{3}Z$/, "+00:00");
							break;
						}
						index++;
					}
				}
			}

			CSLEDIT_storage.setItem(CSL_DATA, JSON.stringify(cslData));
			return cslData;
		};

		var nodeMatch = function (nodeData, nodeString) {
			var nodeInfo = nodeString.split(" "),
				nodeName = nodeInfo[0],
				attribute,
				attributeName,
				attributeValue,
				cslNode = new CSLEDIT_CslNode(nodeData);

			if (nodeInfo.length > 1) {
				attribute = nodeInfo[1].split("=");
				attributeName = attribute[0];
				if (attribute.length > 1) {
					attributeValue = attribute[1].replace(/"/g, "");
				}
			}

			if (nodeName !== nodeData.name) {
				return false;
			}
			
			if (typeof(attributeName) !== "undefined" && !cslNode.hasAttr(attributeName)) {
				return false;
			}

			if (typeof(attributeValue) !== "undefined" &&
					cslNode.getAttr(attributeName) !== attributeValue) {
				return false;
			}

			return true;
		};

		var reorderStyleInfoNode = function (cslData /*optional*/) {
			var styleInfoNode;

			cslData = cslData || get();

			// re-order the style/info child nodes:
			$.each(getNodesFromPath('style/info', cslData), function (i, infoNode) {
				var iterator,
					cslId = infoNode.cslId;

				styleInfoNode = infoNode;

				// re-order
				infoNode.children.sort(function (a, b) {
					var orderA = styleInfoOrder.length,
						orderB = styleInfoOrder.length;

					$.each(styleInfoOrder, function (i, nodeString) {
						if (nodeMatch(a, nodeString)) {
							orderA = i;
						}
						if (nodeMatch(b, nodeString)) {
							orderB = i;
						}
					});

					return orderA - orderB;
				});

				// set cslIds
				iterator = new CSLEDIT_Iterator(infoNode);
				while (iterator.hasNext()) {
					iterator.next().cslId = cslId;
					cslId++;
				}

				return false;
			});

			return styleInfoNode;
		};

		var setCslCode = function (cslCode) {
			var cslData,
				error;
			
			try {
				cslData = CSLEDIT_cslParser.cslDataFromCslCode(cslCode);
			} catch (err) {
				return { error: {
					type: "cslParsing",
					message: "Error parsing CSL Code"
				}};
			}

			// check if this is a dependent style:
			$.each(getNodesFromPath('style/info/link', cslData), function (i, node) {
				var linkNode = new CSLEDIT_CslNode(node);
				if (linkNode.getAttr("rel") === "independent-parent") {
					error = {
						type: "dependentStyle",
						parentURL: linkNode.getAttr("href"),
						message: "Editing of dependent styles not yet supported.\n\n" + 
							"Please find and edit this master style instead:\n\n" +
							linkNode.getAttr("href")
					};
				}
			});

			// check it contains required nodes
			if (typeof error === "undefined") {
				$.each(requiredNodes, function (i, requiredNode) {
					if (getNodesFromPath(requiredNode, cslData).length === 0) {
						error = {
							type: "nodeMissing",
							node: requiredNode,
							message: "CSL code is missing essential node: " + requiredNode
						};
						return false;
					}
				});
			}

			reorderStyleInfoNode(cslData);

			if (error) {
				return { error: error };
			}

			if (updateTime) {
				// add a style/info/updated node if not present
				// (this will be written to on every edit, create here
				//  to avoid doing on every change which would complicate
				//  undo/redo code in CSLEDIT_controller)
				updateTime = false;
				set(cslData);
				if (getNodesFromPath('style/info/updated').length === 0) {
					debug.log("creating required updated node");
					_addNode(getNodesFromPath('style/info')[0].cslId, "last",
							new CSLEDIT_CslNode("updated", [], [], -1), true);
				}
				cslData = get();
				updateTime = true;
			}

			set(cslData);

			emit("newStyle", []);
			return {};
		};

		var getCslCode = function (comment /* optional */) {
			var cslData = get();
			reorderStyleInfoNode(cslData);
		
			return CSLEDIT_cslParser.cslCodeFromCslData(cslData, comment);
		};

		var spliceNode = function (id, position, nodesToDelete, newNode) {
			var iter,
				cslData,
				index,
				node,
				nodesBefore;

			cslData = get();

			nodesBefore = numNodes(cslData);

			// Find the id of the node to add
			iter = new CSLEDIT_Iterator(cslData);

			index = 0;
			while (iter.hasNext()) {
				node = iter.next();
				
				if (index === id) {
					debug.assertEqual(node.cslId, index);
					debug.assert(position + nodesToDelete <= node.children.length);

					if (typeof newNode === "undefined") {
						node.children.splice(position, nodesToDelete);
					} else {
						node.children.splice(position, nodesToDelete, newNode);
					}
				}
				index++;
			}

			// correct the cslId numbering
			iter = new CSLEDIT_Iterator(cslData);
			index = 0;
			while (iter.hasNext()) {
				node = iter.next();
				node.cslId = index;
				index++;
			}

			set(cslData);

			return index - nodesBefore; // difference in number of nodes
		};

		var getNodeAndParent = function (id) {
			var iter = new CSLEDIT_Iterator(get()),
				node;

			while (iter.hasNext()) {
				node = iter.next();

				if (node.cslId === id) {
					return {
						node : node,
						parent : iter.parent()
					};
				}
			}

			// not found
			return { node : null, parent : null };
		};

		var getNodeStack = function (id) {
			var iter = new CSLEDIT_Iterator(get()),
				nodeStack,
				node;

			while (iter.hasNext()) {
				node = iter.next();

				if (node.cslId === id) {
					return iter.stack();
				}
			}
		};

		var getNodePath = function (id) {
			var nodeNames = [];
			$.each(getNodeStack(id), function (i, node) {
				nodeNames.push(node.name);
			});
			return nodeNames.join('/');
		};

		var getNode = function (id, cslData /* optional */) {
			if (typeof cslData !== "undefined") {
				return getNodeAndParent(id, cslData).node;
			} else {
				return getNodeAndParent(id).node;
			}
		};

		// Returns all matching nodes or
		// null if it couldn't find a match
		var getNodesFromPath = function (path, cslData /* optional */) {
			var splitPath = path.split("/"),
				rootNode,
				result = [];

			if (typeof cslData === "undefined") {
				cslData = get();
			}

			rootNode = splitPath.splice(0, 1);

			if (rootNode[0] === "") {
				return result;
			}

			getNodesFromPath_inner(splitPath, cslData, result);
			return result;
		};

		var getNodesFromPath_inner = function (path, nodeData, result) {
			var index,
				rootNode,
				regExp,
				newPath;

			if (path.length === 0) {
				result.push(nodeData);
				return;
			}

			rootNode = path[0];
			newPath = path.slice(1, path.length);

			// convert '*' wildcard to regexp equivalent
			regExp = new RegExp("^" + rootNode.replace("*", ".*") + "$");

			for (index = 0; index < nodeData.children.length; index++) {
				if (regExp.test(nodeData.children[index].name)) {
					getNodesFromPath_inner(newPath, nodeData.children[index], result);
				}
			}
		};

		var getFirstCslId = function (cslData, nodeName) {
			var index,
				result;

			if (cslData.name === nodeName) {
				return cslData.cslId;
			} else {
				for (index = 0; index < cslData.children.length; index++) {
					result = getFirstCslId(cslData.children[index], nodeName);
					if (result > -1) {
						return result;
					}
				}
			}
			// couldn't find it
			return -1;
		};
		
		var numNodes = function (tree) {
			var iter = new CSLEDIT_Iterator(tree),
				index = 0;

			while (iter.hasNext()) {
				iter.next();
				index++;
			}

			return index;
		};

		var emit = function (event, args) {
			$.each(viewControllers, function (index, controller) {
				controller.styleChanged(event, args);
			});
		};
		
		var indexOfChild = function (childNode, parentNode) {
			var index;
			for (index = 0; index < parentNode.children.length; index++) {
				if (childNode.cslId === parentNode.children[index].cslId) {
					return index;
				}
			}
			return -1;
		};
		
		// if 'id' is a macro instance, returns the corresponding macro definition
		// if not, returns 'id' 
		var macroDefinitionIdFromInstanceId = function (id) {
			var node = new CSLEDIT_CslNode(getNode(id)),
				macroName,
				macroNodes,
				macroNode;

			macroName = node.getAttr("macro");
			if (node.name === "text" && macroName !== "") {
				macroNodes = getNodesFromPath("style/macro");

				$.each(macroNodes, function (i, macroNode) {
					var thisMacroNode = new CSLEDIT_CslNode(macroNode);
					if (thisMacroNode.getAttr("name") === macroName) {
						id = thisMacroNode.cslId;
						return false;
					}
				});
			}
			return id;
		};
		
		var addNode = function (id, position, newNode) {
			var newCslId = _addNode(id, position, newNode),
				inverse;
			emit("formatCitations");

			// return the inverse command for undo functionality
			return {
				command : "deleteNode",
				args : [ newCslId ]
			};
		};

		var _addNode = function (id, position, newNode, suppressViewUpdate /*optional*/) {
			var nodeInfo,
				positionIndex,
				nodesAdded,
				defaultAttributes,
				defaultChildren;
			
			newNode.cslId = -1;
			newNode.children = newNode.children || [];
			newNode.attributes = newNode.attributes || [];

			defaultAttributes = CSLEDIT_uiConfig.defaultAttributes[newNode.name];

			// populate with default attributes
			if (newNode.attributes.length === 0 && typeof defaultAttributes !== "undefined") {
				$.each(defaultAttributes, function (attribute, value) {
					newNode.attributes.push({key: attribute, value: value, enabled: true});
				});
			}

			defaultChildren = CSLEDIT_uiConfig.defaultChildren[newNode.name];

			// populate with default children
			if (newNode.children.length === 0 && typeof defaultChildren !== "undefined") {
				newNode.children = defaultChildren;
			}

			if (typeof position === "number") {
				// change parent id from macro instances to macro definitions
				id = macroDefinitionIdFromInstanceId(id);

				nodesAdded = spliceNode(id, position, 0, newNode);
				if (!suppressViewUpdate) {
					emit("addNode", [id, position, newNode, nodesAdded]);
				}
			} else {
				switch (position) {
				case "first":
					// change parent id from macro instances to macro definitions
					id = macroDefinitionIdFromInstanceId(id);

					return _addNode(id, 0, newNode, suppressViewUpdate);
				case "inside":
				case "last":
					// change parent id from macro instances to macro definitions
					id = macroDefinitionIdFromInstanceId(id);
					
					return _addNode(id, getNode(id).children.length, newNode, suppressViewUpdate);
				case "before":
				case "after":
					debug.assert(id !== 0);
					nodeInfo = getNodeAndParent(id);
					positionIndex = indexOfChild(nodeInfo.node, nodeInfo.parent);
					if (position === "after") {
						positionIndex++;
					}
					return _addNode(nodeInfo.parent.cslId, positionIndex, newNode, suppressViewUpdate);
				case "default":
					debug.assert(false, "position: " + position + " not recognised");
				}
			}
			return newNode.cslId;
		};
		
		var deleteNode = function (id) {
			var deletedNode,
				nodeAndParent = getNodeAndParent(id),
				parentNode,
				position,
				nodePath = getNodePath(id),
				error;

			// can't delete required nodes
			$.each(requiredNodes, function (i, requiredNodePath) {
				if (nodePath === requiredNodePath) {
					error = {
						type: "requiredNode",
						message: "Cannot delete required node: " + nodePath
					};
					return false;
				}
			});

			// can't delete the updated node
			// (this isn't in requiredNodes because it's OK to load a style without it)
			if (nodePath === "style/info/updated") {
				error = {
					type: "requiredNode",
					message: "Cannot delete required node: " + nodePath
				};
			}

			if (error) {
				return { error : error };
			}

			parentNode = nodeAndParent.parent.cslId;
			position = indexOfChild(nodeAndParent.node, nodeAndParent.parent);

			deletedNode = _deleteNode(id);

			emit("formatCitations");

			// return the inverse command for undo functionality
			return {
				command : "addNode",
				args : [ parentNode, position, deletedNode ]
			};
		};

		var _deleteNode = function (id) {
			var iter = new CSLEDIT_Iterator(get()),
				index,
				node,
				parentNode,
				nodesDeleted;

			debug.assert(id !== 0); // can't delete the style node

			index = 0;
			while (iter.hasNext()) {
				node = iter.next();

				if (index === id) {
					parentNode = iter.parent();
					break;
				}
				index++;
			}

			debug.assert(typeof parentNode !== "undefined");
			nodesDeleted = -spliceNode(parentNode.cslId, indexOfChild(node, parentNode), 1);
			debug.assertEqual(node.cslId, id);
			
			emit("deleteNode", [id, nodesDeleted]);
			
			return node;
		};

		var amendNode = function (id, amendedNode) {
			// replace everything of the original node except the children and the cslId
			var cslData = get(),
				iter,
				node,
				index,
				result,
				oldNode;
			
			iter = new CSLEDIT_Iterator(cslData);
			index = 0;

			while (iter.hasNext()) {
				node = iter.next();
				if (index === id) {
					debug.assertEqual(node.cslId, id);
					
					oldNode = new CSLEDIT_CslNode(node.name, node.attributes, [], node.cslId);
					oldNode.textValue = node.textValue;

					node.name = amendedNode.name;
					node.attributes = amendedNode.attributes;
					node.textValue = amendedNode.textValue;

					break;
				}
				index++;
			}
			debug.assert(typeof node !== "undefined");
			set(cslData);
			emit("amendNode", [id, node]);
			emit("formatCitations");
			// return inverse command
			return {
				command : "amendNode",
				args : [id, oldNode]
			};
		};

		var moveNode = function (fromId, toId, position) {
			var deletedNode, fromNode,
				inverseFromCslId,
				inverseToNodeAndParent = getNodeAndParent(fromId),
				inverseToCslId,
				inverseToPosition;

			callbacksEnabled = false;

			inverseToCslId = inverseToNodeAndParent.parent.cslId;
			inverseToPosition = indexOfChild(inverseToNodeAndParent.node, inverseToNodeAndParent.parent);

			deletedNode = _deleteNode(fromId);

			debug.log("deletedNode = " + deletedNode.cslId);
			if (toId > fromId) {
				toId -= numNodes(deletedNode);
			}

			inverseFromCslId = _addNode(toId, position, deletedNode);
			if (inverseToCslId > inverseFromCslId) {
				inverseToCslId += numNodes(deletedNode);
			}

			callbacksEnabled = true;

			emit("formatCitations");
			// return inverse command
			return {
				command : "moveNode",
				args : [inverseFromCslId, inverseToCslId, inverseToPosition]
			};
		};

		var initPageStyle = function (callback) {
			var cslData, styleURL, result;
			cslData = get(); 
			
			// try loading style specified in options
			if (typeof CSLEDIT_options.get("initialCslCode") !== "undefined") {
				result = setCslCode(CSLEDIT_options.get("initialCslCode"));
				if (result.hasOwnProperty('error')) {
					alert(result.error.message);
				} else {
					if (typeof callback !== "undefined") {
						callback();
					}
					return;
				}
			}
			
			if (cslData === null || cslData === "") {
				styleURL = CSLEDIT_cslStyles.defaultStyleURL();
				$.get(styleURL, {}, function (cslCode) {
					var result;
					cslCode = cslCode.replace(/<!--.*?-->/g, "");
					result = setCslCode(cslCode);
					if (result.hasOwnProperty('error')) {
						alert(result.error);
					}
					if (typeof callback !== "undefined") {
						callback();
					}
				}, "text");
			} else {
				if (typeof callback !== "undefined") {
					callback();
				}
			}
		};

		return {
			setCslCode : setCslCode,
			getCslCode : getCslCode,
			get : get,
			addNode : addNode,
			deleteNode : deleteNode,
			amendNode : amendNode,
			moveNode : moveNode,
			getNode : getNode,
			getNodeAndParent : getNodeAndParent,
			getNodeStack : getNodeStack,
			getNodePath : getNodePath,
			getFirstCslId : getFirstCslId,

			initPageStyle : initPageStyle,
			numNodes : numNodes,
			numCslNodes : function () {
				return numNodes(get());
			},
			clearViewControllers : function () {
				viewControllers = [];
			},
			addViewController : function (_viewController) {
				viewControllers.push(_viewController);
			},
			getNodesFromPath : getNodesFromPath,
			indexOfChild : indexOfChild,
			macroDefinitionIdFromInstanceId : macroDefinitionIdFromInstanceId
		};
	};
});
