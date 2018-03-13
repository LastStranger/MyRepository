import React, {Component} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";


class Checkout extends Component{
    // state = {
    //     ingredients: null,
    //     totalPrice: 0
    // };
    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for(let each of query.entries()){
    //         if(each[0] === "price"){
    //             price = each[1];
    //         }else {
    //             ingredients[each[0]] = +each[1];
    //         }
    //
    //     }
    //     this.setState({
    //         ingredients: ingredients,
    //         totalPrice: price,
    //     });
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };
    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };
    render(){
        return(
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + "/contact-data"}
                       component={ContactData}
                       // render={(props) => (<ContactData ingredients={this.state.ingredients}
                       //                                  totalPrice={this.state.totalPrice}
                       //                                  {...props}/>)}
                 />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

export default connect(mapStateToProps)(Checkout);