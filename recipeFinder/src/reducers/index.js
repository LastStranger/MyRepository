import {FAVORITE_CANCELLED, FAVORITE_RECIPE, SET_RECIPES} from "../actions/index";
import {combineReducers} from "redux";

const recipes = (state = [], action) => {
    switch (action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
};

const favoriteRecipes = (state=[], action) => {
    switch (action.type){
        case FAVORITE_RECIPE:
            return [
                ...state,
                action.recipe
            ];
        case FAVORITE_CANCELLED:
            console.log(action.title);
            return state.filter(item => action.recipe.title !== item.title);
        default:
            return state;
    }
};

const rootReducer = combineReducers({recipes, favoriteRecipes});

export default rootReducer;