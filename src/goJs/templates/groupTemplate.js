import go from "gojs";

function getGroupTemplate() {
  let $ = go.GraphObject.make;

  function finishDrop(e, grp) {
    var ok =
      grp !== null
        ? grp.addMembers(grp.diagram.selection, true)
        : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true);
    if (!ok) e.diagram.currentTool.doCancel();
  }

  return $(
    go.Group,
    "Vertical",
    {
      background: "transparent",
      computesBoundsAfterDrag: true,
      mouseDrop: finishDrop,
      handlesDragDropForMembers: true,
      //resizable: true,
      // selectionObjectName: "SHAPE",
      // locationObjectName: "SHAPE",
      // resizeObjectName: "SHAPE",
      layout: $(go.GridLayout, {
        wrappingWidth: Infinity,
        alignment: go.GridLayout.Position,
        cellSize: new go.Size(1, 1),
        spacing: new go.Size(4, 4)
      })
    },
    $(
      go.TextBlock,
      {
        name: "TxtBlock",
        alignment: go.Spot.Left,
        font: "Bold 12pt Sans-Serif",
        editable: true
      },
      new go.Binding("text", "Name")
    ),
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
        new go.Binding(
          "desiredSize",
          "desiredSize",
          size =>
            new go.Size(size.width, size.height - (size.height > 40 ? 20 : 0))
        ).ofObject()
      ),
      $(go.Placeholder, { padding: 5 })
    ),
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    )
  );
}

export default getGroupTemplate;
