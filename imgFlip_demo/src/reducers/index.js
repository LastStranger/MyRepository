import {NEW_MEMES, RECEIVE_MEMES} from "../actions/index";
import {combineReducers} from "redux";

const memes = (state= [], action) => {
    switch (action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
};

const myMemes = (state=[], action) => {
    switch (action.type) {
        case NEW_MEMES:
            return [...state, action.meme];
        default:
            return state;
    }
};

const rootReducer = combineReducers({memes, myMemes});

export default rootReducer;