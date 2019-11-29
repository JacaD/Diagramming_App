import go from "gojs";
import getRectangleTemplate from "./nodeTemplates/rectangleTemplate";
import getTriangleTemplate from "./nodeTemplates/triangleTemplate";
import getRoundedRectangleTemplate from "./nodeTemplates/roundedRectangleTemplate";

function getNodeTemplates() {
  const templateMap = new go.Map();
  templateMap.add("Triangle", getTriangleTemplate());
  templateMap.add("Rectangle", getRectangleTemplate());
  templateMap.add("RoundedRectangle", getRoundedRectangleTemplate());
  return templateMap;
}

export default getNodeTemplates;
