(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(32)},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),o=t(12),r=t.n(o),l=t(10),d=t(14),c=Object(l.b)({modified:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DIAGRAM_MODIFIED":return Object(d.a)({},e,{modified:a.modified});default:return e}},diagram:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DIAGRAM":return Object(d.a)({},e,{diagram:a.diagram});default:return e}}}),u=Object(l.c)(c,{modified:!1}),s=t(2),m=t(3),g=t(4),p=t(6),f=t(5),h=t(7),b=function(e){return{type:"DIAGRAM_MODIFIED",modified:e}},v=t(0),k=t.n(v);var w=function(){var e=k.a.GraphObject.make;return e(k.a.Node,"Spot",new k.a.Binding("location","loc",k.a.Point.parse).makeTwoWay(k.a.Point.stringify),e(k.a.Panel,"Auto",e(k.a.Shape,"Rectangle",{stroke:"white",portId:"",cursor:"pointer",fill:"Green"},new k.a.Binding("fromLinkable","from"),new k.a.Binding("toLinkable","to"),new k.a.Binding("fill","color").makeTwoWay(),new k.a.Binding("figure").makeTwoWay()),e(k.a.TextBlock,"",{wrap:k.a.TextBlock.WrapFit,font:"bold 11pt Helvetica, Arial, sans-serif",stroke:"whitesmoke"},new k.a.Binding("text","name").makeTwoWay(),new k.a.Binding("naturalBounds","textSize").ofObject())),{stretch:k.a.GraphObject.Fill,resizable:!0,minSize:new k.a.Size(40,40),mouseDrop:function(e,a){!function(e,a){(null!==a?a.addMembers(a.diagram.selection,!0):e.diagram.commandHandler.addTopLevelParts(e.diagram.selection,!0))||e.diagram.currentTool.doCancel()}(e,a.containingGroup)}})};var O=function(){var e=k.a.GraphObject.make;return e(k.a.Node,"Spot",new k.a.Binding("location","loc",k.a.Point.parse).makeTwoWay(k.a.Point.stringify),e(k.a.Panel,"Auto",e(k.a.Shape,"Triangle",{stroke:"white",portId:"",cursor:"pointer",fill:"Red"},new k.a.Binding("fromLinkable","from"),new k.a.Binding("toLinkable","to"),new k.a.Binding("fill","color"),new k.a.Binding("figure").makeTwoWay()),e(k.a.TextBlock,"",{wrap:k.a.TextBlock.WrapFit,font:"bold 11pt Helvetica, Arial, sans-serif",stroke:"whitesmoke"},new k.a.Binding("text","name").makeTwoWay(),new k.a.Binding("naturalBounds","textSize").ofObject())),{stretch:k.a.GraphObject.Fill,resizable:!0,minSize:new k.a.Size(40,40),mouseDrop:function(e,a){!function(e,a){(null!==a?a.addMembers(a.diagram.selection,!0):e.diagram.commandHandler.addTopLevelParts(e.diagram.selection,!0))||e.diagram.currentTool.doCancel()}(e,a.containingGroup)}})};var y=function(){var e=k.a.GraphObject.make;return e(k.a.Node,"Spot",new k.a.Binding("location","loc",k.a.Point.parse).makeTwoWay(k.a.Point.stringify),e(k.a.Panel,"Auto",e(k.a.Shape,"RoundedRectangle",{stroke:"white",portId:"",cursor:"pointer",fill:"Blue"},new k.a.Binding("fromLinkable","from"),new k.a.Binding("toLinkable","to"),new k.a.Binding("fill","color"),new k.a.Binding("figure").makeTwoWay()),e(k.a.TextBlock,"",{wrap:k.a.TextBlock.WrapFit,font:"bold 11pt Helvetica, Arial, sans-serif",stroke:"whitesmoke"},new k.a.Binding("text","name").makeTwoWay(),new k.a.Binding("naturalBounds","textSize").ofObject())),{stretch:k.a.GraphObject.Fill,resizable:!0,minSize:new k.a.Size(40,40),mouseDrop:function(e,a){!function(e,a){(null!==a?a.addMembers(a.diagram.selection,!0):e.diagram.commandHandler.addTopLevelParts(e.diagram.selection,!0))||e.diagram.currentTool.doCancel()}(e,a.containingGroup)}})};var j=function(){var e=new k.a.Map;return e.add("Triangle",O()),e.add("Rectangle",w()),e.add("RoundedRectangle",y()),e};var T=function(){var e=k.a.GraphObject.make;return e(k.a.Group,"Vertical",{background:"transparent",computesBoundsAfterDrag:!0,mouseDrop:function(e,a){(null!==a?a.addMembers(a.diagram.selection,!0):e.diagram.commandHandler.addTopLevelParts(e.diagram.selection,!0))||e.diagram.currentTool.doCancel()},handlesDragDropForMembers:!0,layout:e(k.a.GridLayout,{wrappingWidth:1/0,alignment:k.a.GridLayout.Position,cellSize:new k.a.Size(1,1),spacing:new k.a.Size(4,4)})},e(k.a.TextBlock,{name:"TxtBlock",alignment:k.a.Spot.Left,font:"Bold 12pt Sans-Serif",editable:!0},new k.a.Binding("text","Name")),e(k.a.Panel,"Auto",e(k.a.Shape,"RoundedRectangle",{name:"SHAPE",parameter1:14,fill:"rgba(128,128,128,0.33)",minSize:new k.a.Size(80,80)},new k.a.Binding("desiredSize","desiredSize",function(e){return new k.a.Size(e.width,e.height-(e.height>40?20:0))}).ofObject()),e(k.a.Placeholder,{padding:5})),new k.a.Binding("location","loc",k.a.Point.parse).makeTwoWay(k.a.Point.stringify))};var B=function(){var e=k.a.GraphObject.make;return e(k.a.Link,{routing:k.a.Link.Orthogonal,corner:5,curve:k.a.Link.JumpOver,toShortLength:4,relinkableFrom:!0,relinkableTo:!0,reshapable:!0,resegmentable:!0},e(k.a.Shape,{isPanelMain:!0,stroke:"green",strokeWidth:2}),e(k.a.Shape,{toArrow:"standard",stroke:null,fill:"green"}),e(k.a.Panel,"Auto",e(k.a.Shape,"RoundedRectangle",{fill:"#F8F8F8",stroke:"green"}),e(k.a.TextBlock,"Info",{width:100,wrap:k.a.TextBlock.WrapFit,isMultiline:!0,textAlign:"center",font:"10pt helvetica, arial, sans-serif",stroke:"#333333",editable:!0},new k.a.Binding("text").makeTwoWay())))};var S=function(e){var a=function(e,a,t,n){return e.data.figure!==t.data.figure};e.toolManager.linkingTool.linkValidation=a,e.toolManager.relinkingTool.linkValidation=a,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.toolManager.linkingTool.temporaryLink.routing=k.a.Link.Orthogonal,e.toolManager.relinkingTool.temporaryLink.routing=k.a.Link.Orthogonal,e.addModelChangedListener(function(a){"figure"===a.propertyName&&function(a){for(var t=(a=e.findNodeForKey(a.key)).findLinksConnected(),n=[];t.next();){var i=t.value;i.fromNode.data.key!==a.data.key&&i.fromNode.data.figure===a.data.figure?n.push(i):i.toNode.data.key!==a.data.key&&i.toNode.data.figure===a.data.figure&&n.push(i)}e.startTransaction("Remove invalid links"),e.removeParts(n),e.commitTransaction("Remove invalid links")}(a.object)})};var R=function(e){var a,t;document.addEventListener("mousemove",function(e){a=e.pageX,t=e.pageY}),document.addEventListener("keydown",function(n){n.shiftKey&&"D"===n.key&&(e.startTransaction("add node"),e.model.addNodeData({name:"Green",stroke:"white",color:"Green",category:"RoundedRectangle",figure:"RoundedRectangle",from:!0,to:!0,loc:a+e.position.x-e.div.offsetLeft+" "+(t+e.position.y-e.div.offsetTop)}),e.commitTransaction("add node"))})};var M=function(e,a){var t=(0,k.a.GraphObject.make)(k.a.Diagram,e,{initialContentAlignment:k.a.Spot.Center,allowDrop:!0,scrollsPageOnFocus:!1,"undoManager.isEnabled":!0,"toolManager.mouseWheelBehavior":k.a.ToolManager.WheelZoom,"commandHandler.archetypeGroupData":{isGroup:!0,category:"OfNodes"}});return t.nodeTemplateMap=j(),t.groupTemplate=T(),t.linkTemplate=B(),S(t),R(t),t.addDiagramListener("Modified",function(e){a(!0)}),t},E=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(h.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.diagram=M(this.props.id,this.props.diagramModified),this.props.diagram(this.diagram)}},{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id})}}]),a}(n.Component),G={diagramModified:b,diagram:function(e){return{type:"DIAGRAM",diagram:e}}},P=E=Object(s.b)(function(e){return{modified:e.modified,diagram:e.diagram}},G)(E);var L=function(e){var a=(0,k.a.GraphObject.make)(k.a.Palette,e,{scrollsPageOnFocus:!1,model:new k.a.GraphLinksModel([{name:"Green",category:"RoundedRectangle",figure:"RoundedRectangle",color:"Green",from:!0,to:!0},{name:"Blue",color:"Blue",category:"Rectangle",figure:"Rectangle",from:!0,to:!0},{name:"Red",color:"Red",category:"Triangle",figure:"Triangle",from:!0,to:!0},{stroke:"white",Name:"Group",isGroup:!0}])});return a.nodeTemplateMap=j(),a.groupTemplate=T(),a},D=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(h.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.palette=L(this.props.id)}},{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id})}}]),a}(n.Component),C=Object(s.b)(function(e){return{modified:e.modified}})(function(e){var a=e.id,t=e.modified;return i.a.createElement("div",{id:a},t.modified?"Diagramming App*":"Diagramming App")}),A=(t(31),t(21)),x=function(e){var a=e.options,t=e.onChange,n=e.def,o=Object(A.a)(e,["options","onChange","def"]);return i.a.createElement("select",Object.assign({onChange:t},o,{defaultValue:n}),a.map(function(e,a){return i.a.createElement("option",{key:a,value:e.value},e.label)}))},F=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).state={},t.inspectObject=function(e){var a=t.props.diagram,n=e;void 0===n&&(n=a.selection.first(),t.updateFields()),n instanceof k.a.Group||n instanceof k.a.Link?t.setState({inspectedObject:null}):(null!==n&&t.inspectedObject!==n||t.setState({inspectedObject:n}),t.setState({inspectedObject:n}),t.updateFields())},t.updateFields=function(){null!==t.state.inspectedObject&&null!==t.state.inspectedObject.data&&void 0!==t.state.inspectedObject&&t.setState({nameInput:t.state.inspectedObject.data.name,colorSelect:t.state.inspectedObject.data.color,figureSelect:t.state.inspectedObject.data.figure})},t.update=function(e,a){var n=t.props.diagram,i=t.state.inspectedObject;null!==i&&(n.startTransaction("set all properties"),n.model.setDataProperty(i.data,a,e),n.commitTransaction("set all properties"))},t.colors=[{value:"Green",label:"Green"},{value:"Grey",label:"Grey"},{value:"Blue",label:"Blue"},{value:"Red",label:"Red"},{value:"Purple",label:"Purple"}],t.figures=[{value:"RoundedRectangle",label:"Rounded Rectangle"},{value:"Triangle",label:"Triangle"},{value:"Rectangle",label:"Rectangle"}],t.state.nameInput="",t.state.colorSelect="",t.state.categorySelect="",t.state.inspectedObject=null,t}return Object(h.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.diagram;a.addModelChangedListener(function(a){a.isTransactionFinished&&e.inspectObject()}),a.addDiagramListener("ChangedSelection",function(){e.inspectObject()})}},{key:"render",value:function(){var e=this;return null===this.state.inspectedObject?i.a.createElement("div",{id:this.props.id}):i.a.createElement("div",{id:this.props.id},i.a.createElement("input",{type:"text",onChange:function(a){return e.update(a.target.value,"name")},value:this.state.nameInput}),i.a.createElement(x,{onChange:function(a){return e.update(a.target.value,"color")},options:this.colors,value:this.state.colorSelect}),i.a.createElement(x,{onChange:function(a){return e.update(a.target.value,"figure")},options:this.figures,value:this.state.figureSelect}))}}]),a}(n.Component);var z=function(e,a){return[{name:"Zoom In",onClick:function(){return e.commandHandler.increaseZoom()}},{name:"Zoom Out",onClick:function(){return e.commandHandler.decreaseZoom()}},{name:"Undo",onClick:function(){return e.commandHandler.undo()}},{name:"Redo",onClick:function(){return e.commandHandler.redo()}},{name:"Save",onClick:function(){sessionStorage.savedDiagram=e.model.toJson(),e.isModified=!1,a(!1)}},{name:"Load",onClick:function(){sessionStorage.savedDiagram&&(e.model=k.a.Model.fromJson(sessionStorage.savedDiagram))}}]},W=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(h.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return 0!==Object.keys(this.props.diagram).length&&i.a.createElement("div",{id:"tools"},z(this.props.diagram.diagram,this.props.diagramModified).map(function(e){return i.a.createElement("button",{className:"toolsButton",key:e.name,onClick:e.onClick},e.name)}))}}]),a}(n.Component),I={diagramModified:b},N=W=Object(s.b)(function(e){return{diagram:e.diagram,modified:e.modified}},I)(W);var H=function(e){return e.makeImage({type:"image/jpg",size:new k.a.Size(250,250),background:"white"})},J=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(i)))).state={image:null},t.makeThumbnail=function(){t.setState({image:0!==Object.keys(t.props.diagram).length&&H(t.props.diagram.diagram)})},t}return Object(h.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"thumbnail"},i.a.createElement("button",{className:"toolsButton",onClick:this.makeThumbnail},"Make Image"),i.a.createElement("div",null,i.a.createElement("img",{src:null===this.state.image?"":this.state.image.src,alt:""})))}}]),a}(n.Component),Z=J=Object(s.b)(function(e){return{diagram:e.diagram}})(J),V=Object(s.b)(function(e){return{diagram:e.diagram}})(function(e){var a=e.id,t=e.diagram;return i.a.createElement("div",{id:a},0!==Object.keys(t).length&&i.a.createElement(F,{diagram:t.diagram,id:"inspector"}),i.a.createElement(N,null),i.a.createElement(Z,null))});var K=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{id:"upperBar"}),i.a.createElement("div",{id:"main"},i.a.createElement(D,{id:"palette"}),i.a.createElement(P,{id:"diagram"}),i.a.createElement(V,{id:"menu"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(s.a,{store:u},i.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.8a8b8475.chunk.js.map