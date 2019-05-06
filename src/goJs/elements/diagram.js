import go from "gojs";

function getDiagram(diagramDiv) {
  let $ = go.GraphObject.make;
  return $(go.Diagram, diagramDiv, {
    initialContentAlignment: go.Spot.Center,
    allowDrop: true,
    scrollsPageOnFocus: false,
    "undoManager.isEnabled": true,
    "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
    "commandHandler.archetypeGroupData": {
      isGroup: true,
      category: "OfNodes"
    }
  });
}

export default getDiagram;
