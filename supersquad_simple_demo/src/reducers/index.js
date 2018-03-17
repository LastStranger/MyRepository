import characters from "./characters_reducer";
import heroes from "./heroes_reducer";
import {combineReducers} from "redux";






const rootReducer = combineReducers({
    characters,
    heroes
});
export default rootReducer;

