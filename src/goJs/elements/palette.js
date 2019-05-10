import go from "gojs";
import getNodeTemplates from "../templates/nodeTemplates";
import getGroupTemplate from "../templates/groupTemplate";

function getPalette(paletteDiv) {
  let $ = go.GraphObject.make;
  let palette = $(go.Palette, paletteDiv, {
    scrollsPageOnFocus: false,
    model: new go.GraphLinksModel([
      {
        name: "Green",
        category: "RoundedRectangle",
        figure: "RoundedRectangle",
        color: "Green",
        from: true,
        to: true
      },
      {
        name: "Blue",
        color: "Blue",
        category: "Rectangle",
        figure: "Rectangle",
        from: true,
        to: true
      },
      {
        name: "Red",
        color: "Red",
        category: "Triangle",
        figure: "Triangle",
        from: true,
        to: true
      },
      { stroke: "white", Name: "Group", isGroup: true }
    ])
  });

  palette.nodeTemplateMap = getNodeTemplates();
  palette.groupTemplate = getGroupTemplate();

  return palette;
}

export default getPalette;
