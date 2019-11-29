import go from "gojs";

function getTriangleTemplate() {
  const $ = go.GraphObject.make;

  const finishDrop = (e, grp) => {
    const ok =
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
        "Triangle",
        {
          stroke: "white",
          portId: "",
          cursor: "pointer",
          fill: "Red"
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
          wrap: go.TextBlock.WrapFit,
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "whitesmoke"
        },
        new go.Binding("text", "name").makeTwoWay(),
        new go.Binding("naturalBounds", "textSize").ofObject()
      )
    ),
    {
      stretch: go.GraphObject.Fill,
      resizable: true,
      minSize: new go.Size(40, 40),
      mouseDrop: (e, nod) => {
        finishDrop(e, nod.containingGroup);
      },
    }
  );
}

export default getTriangleTemplate;
