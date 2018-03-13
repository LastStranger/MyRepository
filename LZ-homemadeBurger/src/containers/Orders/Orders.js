import React, {Component} from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
class Orders extends Component{
    state = {
        orders: [],
        loading: true,
    };

    componentDidMount(){
        axios.get("/orders.json")
            .then(response => {

                const fetchOrders = [];
                for(let index in response.data){
                    fetchOrders.push({
                        ...response.data[index],
                        id: index,
                    })
                }
                this.setState({
                    loading:false,
                    orders: fetchOrders,
                })
            }).catch(error => {
            this.setState({
                loading:false,
            })
        })
    }
    render(){

        return (
            <div>

                {
                    this.state.orders.map(item => (
                        <Order key={item.id}
                               ingredients={item.ingredients}
                               price={+item.price}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Orders;