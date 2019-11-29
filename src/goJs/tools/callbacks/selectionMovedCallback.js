import go from 'gojs';

const selectionMovedCallback = e => {
    const diagram = e.diagram;
    e.subject.iterator.each(part => {
      while(part.containingGroup){
        if(!diagram.computePartsBounds([part.containingGroup]).containsRect(diagram.computePartsBounds([part]).addMargin(new go.Margin(20)))){
          const size = diagram.computePartsBounds([part.containingGroup]).unionRect(diagram.computePartsBounds([part]).addMargin(new go.Margin(20)));
          diagram.model.setDataProperty(part.containingGroup.data, 'loc',`${size.x} ${size.y}`);
          diagram.model.setDataProperty(part.containingGroup.data, 'desiredSize', new go.Size(size.width, size.height));
        }
        part = part.containingGroup;
      }
    });
  }

export default selectionMovedCallback;