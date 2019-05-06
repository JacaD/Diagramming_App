import go from "gojs";

function getPalette(paletteDiv) {
  let $ = go.GraphObject.make;
  return $(go.Palette, paletteDiv, {
    scrollsPageOnFocus: false,
    model: new go.GraphLinksModel([
      {
        name: "green",
        stroke: "white",
        color: "lime",
        figure: "RoundedRectangle",
        from: true,
        to: true
      },
      {
        name: "blue",
        stroke: "white",
        color: "blue",
        figure: "Rectangle",
        from: true,
        to: true
      },
      {
        name: "red",
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
