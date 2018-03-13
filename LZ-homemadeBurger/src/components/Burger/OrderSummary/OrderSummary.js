import React from "react";
import Aux from "../../../hoc/Auxes";
import Button from "../../UI/Button/Button";

const orderSummary = (props) =>{
    const ingredientsSummary = Object.keys(props.ingredients).map((item, index) => {
        return (
            <li key={index + "item"}>
            <span style={{textTransform: "capitalize"}}>{item}</span>: {props.ingredients[item]}
            </li>)
    });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue or Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;