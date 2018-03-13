import React, {Component} from "react";
import {connect} from "react-redux";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "your Name",
                },
                value: "",
                validation: {
                    required: true,
                    maxLength: true,
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "your Street",
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "your E-mail",
                },
                value: "",
                validation: {
                    required: true,
                    email: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {value: "fastest", displayValue: "Fastest"},
                        {value: "cheapest", displayValue: "cheapest"}
                    ]
                },
                value: "",
                validation: {

                },
                valid: true,
                touched: false,
            },
        },
        loading: false,
        formValid: false,
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        });
        const formData = {};
        for(let index in this.state.orderForm){
            formData[index] = this.state.orderForm[index].value;
        }

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
        };
        axios.post("/orders.json ", order)
            .then(response => {
                this.setState({
                    loading: false,
                });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({
                    loading: false,
                })
            });
    };

    inputChangedHandler = (event, inputIdentifier ) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = ContactData.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let flag = true;
        for(let index in updatedOrderForm){
            flag = updatedOrderForm[index].valid && flag;
            // if(flag === this.state.orderForm[index].valid){
            //     break;
            // }else {
            //     this.setState({
            //         formInValid: false
            //     });
            // }
            console.log(updatedOrderForm[index].valid)
        }
        this.setState({
            orderForm: updatedOrderForm,
            formValid: flag,
        })
    };

    static checkValidity(value, rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== "" && isValid;
        }
        if(rules.maxLength){
            isValid = value.length < 8 && isValid;
        }
        if(rules.email){
            isValid = value.match(/(^[a-zA-Z1-9][a-zA-Z0-9]{5,16})(@qq.com)|(@gmail.com)|(@163.com)/) !== null  && isValid;
        }
        console.log(isValid);
        return isValid;

    }

    render(){
        const formElementsArray = [];
        for(let index in this.state.orderForm){
            formElementsArray.push({
                id: index,
                config: this.state.orderForm[index],
            });
        }


        let form = (
            <form>
                {formElementsArray.map(item => {
                    return (
                        <Input
                            key={item.id}
                            elementType={item.config.elementType}
                            elementConfig={item.config.elementConfig}
                            value={item.config.value}
                            valid={item.config.valid}
                            touched={item.config.touched}
                            changed={(event) => this.inputChangedHandler(event, item.id)}
                        />
                    )
                })}
                {/*<Input inputtype="input" type="email" name="email" placeholder="your email"/>*/}
                {/*<Input inputtype="input" type="text" name="Postal" placeholder="your Postal Code"/>*/}
                <Button
                    disabled={!this.state.formValid}
                    btnType="Success"
                    clicked={this.orderHandler}
                >Order</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

export default connect(mapStateToProps)(ContactData);