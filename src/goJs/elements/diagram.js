import go from "gojs";
import getNodeTemplates from "../templates/nodeTemplates";
import getGroupTemplate from "../templates/groupTemplate";
import getLinkTemplate from "../templates/linkTemplate";
import addLinkValidationToDiagram from "../tools/validators/linkValidation";
import addShortcutsToDiagram from "../tools/shortcuts/shortcuts";
import CustomResizingTool from '../tools/toolExtensions/CustomResizingTool';
import SelectionMovedListeners from '../tools/callbacks/SelectionMovedListeners';

const createDiagram = (diagramDiv, modifiedReducer) => {
  const $ = go.GraphObject.make;
  const diagram = $(go.Diagram, diagramDiv, {
    initialContentAlignment: go.Spot.Center,
    allowDrop: true,
    scrollsPageOnFocus: false,
    maxSelectionCount: 1,
    resizingTool: new CustomResizingTool(),
    mouseDrop: (e, grp) => {
      const ok = e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true);
      if (!ok) e.diagram.currentTool.doCancel();
    }
  });

  diagram.undoManager.isEnabled = true;
  diagram.toolManager.mouseWheelBehavior = go.ToolManager.WheelZoom;
  diagram.nodeTemplateMap = getNodeTemplates();
  diagram.groupTemplate = getGroupTemplate();
  diagram.linkTemplate = getLinkTemplate();
  addLinkValidationToDiagram(diagram);
  addShortcutsToDiagram(diagram);
  diagram.addDiagramListener("Modified", e => {
    modifiedReducer(true);
  });
  new SelectionMovedListeners(diagram);

  return diagram;
}

export default createDiagram;
