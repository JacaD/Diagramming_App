import go from "gojs";

function getPalette(paletteDiv) {
  let $ = go.GraphObject.make;
  return $(go.Palette, paletteDiv, {
    scrollsPageOnFocus: false,
    model: new go.GraphLinksModel([
      {
        name: "Green",
        stroke: "white",
        color: "green",
        figure: "RoundedRectangle",
        from: true,
        to: true
      },
      {
        name: "Blue",
        stroke: "white",
        color: "blue",
        figure: "Rectangle",
        from: true,
        to: true
      },
      {
        name: "Red",
        stroke: "white",
        color: "red",
        figure: "Triangle",
        from: true,
        to: true
      },
      { stroke: "white", Name: "Group", isGroup: true }
    ])
  });
}

export default getPalette;
