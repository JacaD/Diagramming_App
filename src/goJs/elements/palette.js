import go from "gojs";

function getPalette(paletteDiv) {
  let $ = go.GraphObject.make;
  return $(go.Palette, paletteDiv, {
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
}

export default getPalette;
