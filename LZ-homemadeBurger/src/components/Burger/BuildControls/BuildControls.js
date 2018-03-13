import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";


const constrols = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {constrols.map((item) =>{
            return <BuildControl
                key={item.type}
                label={item.label}
                added={() => props.ingredientAdded(item.type)}
                removed={() => props.ingredientRemoved(item.type)}
                disabled={props.disabled[item.type]}
            />
        })}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >Order Now</button>
    </div>
);

export default buildControls;