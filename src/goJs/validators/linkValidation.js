import go from "gojs";

function addLinkValidationToDiagram(diagram) {
  let sameFigure = (fromnode, fromport, tonode, toport) =>
    fromnode.data.figure !== tonode.data.figure;

  diagram.toolManager.linkingTool.linkValidation = sameFigure;
  diagram.toolManager.relinkingTool.linkValidation = sameFigure;

  diagram.model.linkFromPortIdProperty = "fromPort";
  diagram.model.linkToPortIdProperty = "toPort";
  diagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
  diagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

  let checkLinks = function(object) {
    object = diagram.findNodeForKey(object.key);
    let connectedLinks = object.findLinksConnected();

    let toDelete = [];

    while (connectedLinks.next()) {
      let link = connectedLinks.value;
      if (
        link.fromNode.data.key !== object.data.key &&
        link.fromNode.data.figure === object.data.figure
      ) {
        toDelete.push(link);
      } else if (
        link.toNode.data.key !== object.data.key &&
        link.toNode.data.figure === object.data.figure
      ) {
        toDelete.push(link);
      }
    }
    diagram.startTransaction("Remove invalid links");
    diagram.removeParts(toDelete);
    diagram.commitTransaction("Remove invalid links");
  };

  diagram.addModelChangedListener(function(e) {
    if (e.propertyName === "figure") {
      checkLinks(e.object);
    }
  });
}

export default addLinkValidationToDiagram;
