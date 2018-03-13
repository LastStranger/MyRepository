import React, {Component} from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxes";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
// import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions/actionTypes";


class BurgerBuilder extends Component{
    state = {
        // ingredients: null,
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0 ,
        //     meat: 0,
        // },
        // totalPrice: 2,
        // purchasable: false,
        purchasing: false,  // 隐藏或者打开模态框
        loading: false,  // display spinner
    };

    componentDidMount(){
        // console.log(this.props);
        // axios.get("/ingredients.json")
        //     .then(response => {
        //             this.setState({
        //                 ingredients: response.data
        //             });
        //
        //     })

    }

    updatePurchaseState(updatedIngredients){
        const sum = Object.keys(updatedIngredients).map((item) => {
            return updatedIngredients[item]
        }).reduce((sum, cur) => {
            return sum + cur
        });
        return sum > 0;
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients,
    //     });
    //     this.updatePurchaseState(updatedIngredients);
    // };
    //
    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount < 1){
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients,
    //     });
    //     this.updatePurchaseState(updatedIngredients);
    // };

    purchaseHandle = () => {
        this.setState({
            purchasing: true
        })
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    };

    purchaseContinueHandler = () => {

        // const queryParams = [];
        // for(let index in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(index) + '=' + encodeURIComponent(this.state.ingredients[index]));
        // }
        // queryParams.push("price=" + this.state.totalPrice);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: "?" + queryString
        // });

        this.props.history.push('/checkout');
    };

    render(){
        const disabledInfo = {
            ...this.props.ings
        };
        for(let index in disabledInfo){
            disabledInfo[index] = disabledInfo[index] < 1
        }
        let orderSummary = null;
        let burger = <Spinner/>;
        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded} // 在BuildControls里面会传给
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandle}
                    />
                </Aux>
            );
            //模态框的内容
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />;
        }
        if(this.state.loading){
            orderSummary = <Spinner/>;

        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName}),
    }
};

// export default withErrorHandler(BurgerBuilder, axios);
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);