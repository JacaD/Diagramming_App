import go from "gojs";

function makeThumbnail(diagram) {
  const image = diagram.makeImage({
    type: "image/jpg",
    size: new go.Size(250, 250),
    background: "white"
  });
  return image;
}

export default makeThumbnail;
