export const modified = (state = {}, action) => {
  switch (action.type) {
    case "DIAGRAM_MODIFIED":
      return { ...state, modified: action.modified };
    default:
      return state;
  }
};
