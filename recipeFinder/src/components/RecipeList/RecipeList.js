import React, {Component} from "react";
import {connect} from "react-redux";
import RecipeItem from "../RecipeItem/RecipeItem";
import {Link} from "react-router-dom";


class RecipeList extends Component{
    render() {
        return (
            <div>
                {
                    this.props.favoriteRecipes.length > 0 ?
                        <h4><Link to="/favorite">favorites</Link></h4>
                        :
                        null
                }
                {
                    this.props.recipes.map((recipe, index) => {
                        return (
                            <RecipeItem key={index}
                                        recipe={recipe}
                                        favoriteButton={true}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        favoriteRecipes: state.favoriteRecipes
    }
};

export default connect(mapStateToProps, null)(RecipeList);