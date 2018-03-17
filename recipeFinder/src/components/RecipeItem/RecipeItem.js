import React, {Component} from "react";
import {connect} from "react-redux";
import {favoriteRecipe} from "../../actions/index";

class RecipeItem extends Component {
    constructor() {
        super();
        this.state = {
            favorited: false
        }
    }

    favorite = (recipe) => {
        this.props.favoriteRecipe(recipe);
        let flag = !this.state.favorited;
        this.setState({
            favorited: flag
        })
    };



    render() {
        // let {recipe} = this.props;
        const recipe = {...this.props.recipe};

        return (
            <div className="recipe-item">
                {
                    this.props.favoriteButton ?
                            this.state.favorited ?
                            <div className="star"
                                 onClick={() => this.favorite(recipe)}
                            >&#9733;</div>
                            :
                            <div
                                className="star"
                                onClick={() => this.favorite(recipe)}
                            >
                                &#9734;
                            </div>
                        :
                        <div className="star"
                             onClick={() => this.props.favoriteCancel(recipe)}
                        >&#9733;</div>

                }
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4>{recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img src={recipe.thumbnail}
                     alt={recipe.title}
                     className="recipe-img"
                />
            </div>
        );
    }
}

export default connect(null, {favoriteRecipe})(RecipeItem);