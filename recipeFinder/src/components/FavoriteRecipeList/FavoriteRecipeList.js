import React, {Component} from "react";
import {connect} from "react-redux";
import RecipeItem from "../RecipeItem/RecipeItem";
import {Link} from "react-router-dom";
import {favoriteCancel} from "../../actions/index";


class FavoriteRecipeList extends Component {

    favoriteCancelHandler = (recipe) => {
        this.props.favoriteCancel(recipe);
    };
    render() {
        return (
            <div>
                <h4><Link to="/">Home</Link></h4>
                <h4>Favorite recipes:</h4>
                {
                    this.props.favoriteRecipes.map((recipe, index) => {
                        return (
                            <RecipeItem key={index}
                                        recipe={recipe}
                                        favoriteButton={false}
                                        favoriteCancel={(haha) => this.favoriteCancelHandler(haha)}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favoriteRecipes: state.favoriteRecipes
    }
};

export default connect(mapStateToProps, {favoriteCancel})(FavoriteRecipeList);