import go from 'gojs';
import GroupResizeManager from '../toolManagers/GroupResizeManager';

export default class CustomResizingTool extends go.ResizingTool {
    resize = (newr) => {
      const diagram = this.diagram;
      if (diagram === null) {
        return;
      }
      GroupResizeManager.resizeAfterMemberResize(diagram);
      super.resize.call(this, newr)
    }
    
    computeMinSize = () => {
      return GroupResizeManager.computeMinSize(this.adornedObject);
    }  
  }
  