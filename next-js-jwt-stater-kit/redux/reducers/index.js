import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";


const reducers = combineReducers({
  settings: Settings,
  common: Common,
});

export default reducers;
