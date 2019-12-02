import go from 'gojs';

const getGroupInfo = (diagram, part) => {
    const groupLoc = go.Point.parse(part.containingGroup.data.loc);
    const membersBounds = diagram.computePartsBounds(part.containingGroup.memberParts).addMargin(new go.Margin(20));
    const groupSize = part.containingGroup.resizeObject;
    return { groupLoc, membersBounds, groupSize }
}

const getGroupBounds = (bounds, loc, groupSize) => {
    let { x, y } = loc;
    let { width, height } = groupSize;

    if(bounds.x < loc.x) { // if member parts further to the left
        x = bounds.x;
        width += loc.x - bounds.x;
    }
    if(bounds.y < loc.y) { // if member parts further to the top
        y = bounds.y;
        height += loc.y - bounds.y;
    }
    if(bounds.x + bounds.width > loc.x + groupSize.width){ // if member parts further to the right
        width = width - groupSize.width + bounds.x + bounds.width - loc.x;
    }
    if(bounds.y + bounds.height > loc.y + groupSize.height){ // if member parts further to the bottom
        height = height - groupSize.height + bounds.y + bounds.height - loc.y;
    }

    return { x, y, width, height }
}

const setPartsGroupSize = (diagram, part, x, y, width, height) => {
    diagram.startTransaction('customResizing');
    diagram.model.setDataProperty(part.containingGroup.data, 'loc', `${x} ${y}`);
    diagram.model.setDataProperty(part.containingGroup.data, 'desiredSize', new go.Size(width, height));
    diagram.commitTransaction('customResizing');
}

export default class GroupResizeManager{
    static resizeAfterMemberResize = (diagram) => {
        let part = diagram.selection.first();
        while(part.containingGroup){
            const { groupLoc, membersBounds, groupSize } = getGroupInfo(diagram, part);
            const { x, y, width, height } = getGroupBounds(membersBounds, groupLoc, groupSize);
            setPartsGroupSize(diagram, part, x, y, width, height);
            part = part.containingGroup;
        }
    }

    static computeMinSize = (adornedObject) => {
        if(!adornedObject.part.data.isGroup) return new go.Size(0,0);
        let group = adornedObject.part;
        if(!group.memberParts.count) return new go.Size(0,0);
        let membnds = group.diagram.computePartsBounds(group.memberParts);
        membnds.addMargin(new go.Margin(20));
        membnds.unionPoint(group.location);
        return membnds.size;
    }
    
    static resizeAfterMemberDrag = e => {
        const diagram = e.diagram;
        e.subject.iterator.each(part => {
            const group = part.containingGroup;
            while(part.containingGroup){
                if(!group.actualBounds.containsRect(part.actualBounds.copy().addMargin(new go.Margin(20)))){
                    const size = group.actualBounds.unionRect(part.actualBounds.copy().addMargin(new go.Margin(20)));
                    diagram.model.setDataProperty(part.containingGroup.data, 'loc', go.Point.stringify(new go.Point(size.x, size.y)));
                    diagram.model.setDataProperty(part.containingGroup.data, 'desiredSize', new go.Size(size.width, size.height));
                }
                part = part.containingGroup;
            }
        });
    }
}