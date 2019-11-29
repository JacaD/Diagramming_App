import go from "gojs";
import getNodeTemplates from "../templates/nodeTemplates";
import getGroupTemplate from "../templates/groupTemplate";
import getLinkTemplate from "../templates/linkTemplate";
import addLinkValidationToDiagram from "../tools/validators/linkValidation";
import addShortcutsToDiagram from "../tools/shortcuts/shortcuts";
import GroupResizingTool from '../tools/toolExtensions/GroupResizingTool';
import selectionMovedCallback from '../tools/callbacks/selectionMovedCallback';

const getDiagram = (diagramDiv, modifiedReducer) => {
  const $ = go.GraphObject.make;
  const diagram = $(go.Diagram, diagramDiv, {
    initialContentAlignment: go.Spot.Center,
    allowDrop: true,
    scrollsPageOnFocus: false,
    "undoManager.isEnabled": true,
    "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
    "commandHandler.archetypeGroupData": {
      isGroup: true,
      category: "OfNodes"
    },
    maxSelectionCount: 1,
    resizingTool: new GroupResizingTool(),
    mouseDrop: (e, grp) => {
      const ok = e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true);
      if (!ok) e.diagram.currentTool.doCancel();
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
  diagram.addDiagramListener('SelectionMoved', selectionMovedCallback);

  return diagram;
}

export default getDiagram;
