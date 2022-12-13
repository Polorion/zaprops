import { combineReducers, legacy_createStore as createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import playerReducer from "./reducers/PlayerReducer";
import chickenReducer from "./reducers/ChickenReducer";
import openChickenReducer from "./reducers/OpenChickeReducer";

const redusers = combineReducers({
  chicken: chickenReducer,
  player: playerReducer,
  openChicken: openChickenReducer,
});

const store = createStore(redusers, composeWithDevTools());

export default store;
