export const diagram = (state = {}, action) => {
  switch (action.type) {
    case "DIAGRAM":
      return { ...state, diagram: action.diagram };
    default:
      return state;
  }
};
