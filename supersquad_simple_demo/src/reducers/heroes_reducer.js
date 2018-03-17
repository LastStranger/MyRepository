import {ADD_CHARACTER, REMOVE_CHARACTER} from "../actions/index";
import {createCharacter} from "./helpers";

const heroes = (state = [], action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return [...state, createCharacter(action.id)];
        case REMOVE_CHARACTER:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
};



export default heroes;