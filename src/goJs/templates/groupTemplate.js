import go from "gojs";

function getGroupTemplate() {
  const $ = go.GraphObject.make;

  const finishDrop = (e, grp) => {
    const ok =
      grp !== null
        ? grp.addMembers(grp.diagram.selection, true)
        : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true);
    if (!ok) e.diagram.currentTool.doCancel();
  }

  return $(
    go.Group,
    "Spot",
    {
      mouseDrop: finishDrop,
      resizable: true,
      resizeObjectName: "SHAPE",
    },
    $(
      go.Panel,
      "Auto",
      $(
        go.Shape,
        "RoundedRectangle",
        {
          name: "SHAPE",
          parameter1: 14,
          fill: "rgba(128,128,128,0.33)",
          minSize: new go.Size(80, 80)
        },
        new go.Binding('desiredSize', 'desiredSize').makeTwoWay()
      ),
    ),
    $(
      go.TextBlock,
      {
        name: "TxtBlock",
        alignment: new go.Spot(0.5, 0, 0, 10),
        font: "Bold 12pt Sans-Serif",
        editable: true
      },
      new go.Binding("text", "Name")
    ),
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    )
  );
}

export default getGroupTemplate;
