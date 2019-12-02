import GroupResizeManager from '../toolManagers/GroupResizeManager';


class SelectionMovedListeners {
  constructor(diagram){
    this.diagram = diagram;
    this.selectionMovedCallback = diagram.addDiagramListener('SelectionMoved', GroupResizeManager.resizeAfterMemberDrag);
  }

  selectionMovedCallback;
}

export default SelectionMovedListeners;