import React, {Component} from "react";
import SearchRecipes from "./components/SearchRecipes/SearchRecipes";
import "./styles/index.css";
import RecipeList from "./components/RecipeList/RecipeList";
import FavoriteRecipeList from "./components/FavoriteRecipeList/FavoriteRecipeList";
class App extends Component {
    render(){
        return (
            <div className="App">
                <h1>Recipe Finder</h1>
                <SearchRecipes/>
                <RecipeList/>
            </div>
        )
    }
}

export default App;