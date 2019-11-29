import go from "gojs";

function getLinkTemplate() {
  const $ = go.GraphObject.make;

  return $(
    go.Link,
    {
      routing: go.Link.Orthogonal,
      corner: 5,
      curve: go.Link.JumpOver,
      toShortLength: 4,
      relinkableFrom: true,
      relinkableTo: true,
      reshapable: true,
      resegmentable: true
    },
    $(go.Shape, { isPanelMain: true, stroke: "green", strokeWidth: 2 }),
    $(go.Shape, { toArrow: "standard", stroke: null, fill: "green" }),
    $(
      go.Panel,
      "Auto",
      $(go.Shape, "RoundedRectangle", { fill: "#F8F8F8", stroke: "green" }),
      $(
        go.TextBlock,
        "Info",
        {
          width: 100,
          wrap: go.TextBlock.WrapFit,
          isMultiline: true,
          textAlign: "center",
          font: "10pt helvetica, arial, sans-serif",
          stroke: "#333333",
          editable: true
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );
}

export default getLinkTemplate;
