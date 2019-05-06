import { combineReducers } from "redux";
import { modified } from "./modified";
import { diagram } from "./diagram";

export default combineReducers({
  modified,
  diagram
});
