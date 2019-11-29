import go from 'gojs';

export default class GroupResizingTool extends go.ResizingTool {
    resize = (newr) => {
      const diagram = this.diagram;
      if (diagram === null) {
        return;
      }
      let part = diagram.selection.first();
      while(part.containingGroup){
        const loc = go.Point.parse(part.containingGroup.data.loc);
        const bounds = diagram.computePartsBounds(part.containingGroup.memberParts).addMargin(new go.Margin(20));
        const groupSize = part.containingGroup.resizeObject;
        let x = loc.x;
        let y = loc.y;
        let width = groupSize.width;
        let height = groupSize.height;
        if(bounds.x < loc.x) {
          x = bounds.x;
          width += loc.x - bounds.x;
        }
        if(bounds.y < loc.y) {
          y = bounds.y;
          height += loc.y - bounds.y;
        }
        if(bounds.x + bounds.width > loc.x + groupSize.width){
          width = width - groupSize.width + bounds.x + bounds.width - loc.x;
        }
        if(bounds.y + bounds.height > loc.y + groupSize.height){
          height = height - groupSize.height + bounds.y + bounds.height - loc.y;
        }
        diagram.startTransaction('customResizing');
        diagram.model.setDataProperty(part.containingGroup.data, 'loc',`${x} ${y}`);
        diagram.model.setDataProperty(part.containingGroup.data, 'desiredSize', new go.Size(width, height));
        diagram.commitTransaction('customResizing');
        part = part.containingGroup;
      }
      super.resize.call(this, newr)
    }
    
    computeMinSize = () => {
      if(!this.adornedObject.part.data.isGroup) return new go.Size(0,0);
          let group = this.adornedObject.part;
          if(!group.memberParts.count) return new go.Size(0,0);
          let membnds = group.diagram.computePartsBounds(group.memberParts);
          membnds.addMargin(new go.Margin(20));
          membnds.unionPoint(group.location);
          return membnds.size;
    }  
  }
  