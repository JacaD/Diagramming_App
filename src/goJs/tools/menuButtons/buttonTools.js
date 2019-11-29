import go from "gojs";

const getTools = (diagram, modifiedReducer) => {
  return [
    {
      name: "Zoom In",
      onClick: () => diagram.commandHandler.increaseZoom()
    },
    {
      name: "Zoom Out",
      onClick: () => diagram.commandHandler.decreaseZoom()
    },
    {
      name: "Undo",
      onClick: () => diagram.commandHandler.undo()
    },
    {
      name: "Redo",
      onClick: () => diagram.commandHandler.redo()
    },
    {
      name: "Save",
      onClick: () => {
        sessionStorage.savedDiagram = diagram.model.toJson();
        diagram.isModified = false;
        modifiedReducer(false);
      }
    },
    {
      name: "Load",
      onClick: () => {
        if (sessionStorage.savedDiagram) {
          diagram.model = go.Model.fromJson(sessionStorage.savedDiagram);
        }
      }
    }
  ];
}

export default getTools;
