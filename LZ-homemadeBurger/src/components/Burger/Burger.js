import React from "react";
import  {withRouter} from "react-router-dom";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {
    console.log(props);
    const transformIngredients = Object.keys(props.ingredients).map((igItem) => {
        return [...Array(props.ingredients[igItem])].map((item, index) => {
            return <BurgerIngredient key={igItem + index} type={igItem}/>
        });
    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);