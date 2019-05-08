function addShortcutsToDiagram(diagram) {
  let x, y;
  document.addEventListener("mousemove", e => {
    x = e.pageX;
    y = e.pageY;
  });
  document.addEventListener("keydown", e => {
    if (e.key === "n") {
      diagram.startTransaction("add node");
      diagram.model.addNodeData({
        name: "Green",
        stroke: "white",
        color: "Green",
        category: "roundedRectangle",
        // from: true,
        // to: true,
        loc:
          "" +
          (x + diagram.position.x - diagram.div.offsetLeft) +
          " " +
          (y + diagram.position.y - diagram.div.offsetTop)
      });
      diagram.commitTransaction("add node");
    }
  });
}

export default addShortcutsToDiagram;
