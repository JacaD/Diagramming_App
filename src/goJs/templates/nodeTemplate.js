import go from "gojs";

function getNodeTemplate() {
  let $ = go.GraphObject.make;

  function finishDrop(e, grp) {
    var ok =
      grp !== null
        ? grp.addMembers(grp.diagram.selection, true)
        : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true);
    if (!ok) e.diagram.currentTool.doCancel();
  }

  return $(
    go.Node,
    "Spot",
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Panel,
      "Auto",
      $(
        go.Shape,
        "Rectangle",
        {
          stroke: null,
          portId: "",
          cursor: "pointer"
        },
        new go.Binding("fromLinkable", "from"),
        new go.Binding("toLinkable", "to"),
        new go.Binding("fill", "color"),
        new go.Binding("figure").makeTwoWay()
      ),
      $(
        go.TextBlock,
        "",
        {
          font: "bold 11pt H elvetica, Arial, sans-serif",
          stroke: "whitesmoke"
        },
        new go.Binding("text", "name").makeTwoWay()
      )
    ),
    {
      resizable: true,
      minSize: new go.Size(40, 40),
      mouseDrop: function(e, nod) {
        finishDrop(e, nod.containingGroup);
      }
    }
  );
}

export default getNodeTemplate;
