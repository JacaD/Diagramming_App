import go from "gojs";
import getNodeTemplates from "../templates/nodeTemplates";
import getGroupTemplate from "../templates/groupTemplate";
import getLinkTemplate from "../templates/linkTemplate";
import addLinkValidationToDiagram from "../validators/linkValidation";
import addShortcutsToDiagram from "../shortcuts/shortcuts";

function getDiagram(diagramDiv, modifiedReducer) {
  let $ = go.GraphObject.make;

  let diagram = $(go.Diagram, diagramDiv, {
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

  diagram.nodeTemplateMap = getNodeTemplates();
  diagram.groupTemplate = getGroupTemplate();
  diagram.linkTemplate = getLinkTemplate();
  addLinkValidationToDiagram(diagram);
  addShortcutsToDiagram(diagram);
  diagram.addDiagramListener("Modified", e => {
    modifiedReducer(true);
  });

  return diagram;
}

export default getDiagram;
