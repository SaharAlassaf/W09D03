import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sign from "./sign";
import tasks from "./tasks";
import user from "./user";
import admin from "./admin";



const reducers = combineReducers({ sign, tasks, user, admin });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
