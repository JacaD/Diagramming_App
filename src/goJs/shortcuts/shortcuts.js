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
        name: "green",
        stroke: "white",
        color: "lime",
        figure: "RoundedRectangle",
        from: true,
        to: true,
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
