// Importing the addItem functionality from the addItem page.
import addItem from "./addItem";
// Importing the combineReducers helper function to turn the object(s) whose values are different by reducing functions into a single reducing function. 
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    addItem
})

export default rootReducers;