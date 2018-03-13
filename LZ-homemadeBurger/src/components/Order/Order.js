import React from "react";
import classes from "./Order.css";


const order = (props) => {
    const ingredient = [];
    for(let index in props.ingredients){
        ingredient.push({
            name: index,
            amount: props.ingredients[index],
        })
    }
    const ingredientOutput = ingredient.map(each => {
        return <span key={each.name}>{each.name} {each.amount} </span>
    });
    // props.ingredients.map(item => {
    //
    // });


    return(
        <div className={classes.Order}>
            <p>Ingredient:{ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default order;