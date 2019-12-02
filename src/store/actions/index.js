export const setIsDiagramModified = modified => ({
  type: "DIAGRAM_MODIFIED",
  modified
});

export const getDiagram = diagram => ({
  type: "DIAGRAM",
  diagram
});
