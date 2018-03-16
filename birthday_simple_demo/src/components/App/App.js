import React, {Component} from "react";
import {Form, FormControl, Button} from "react-bootstrap";
import classes from "./App.css";
import Contents from "../contents/contents"
class App extends Component {
    constructor() {
        super();
        this.state = {
            newDate: "",
            birthday: "",
            show: false,
        }
    }

    changeDateHandler = (event) => {
        this.setState({
            newDate: event.target.value
        })
    };

    changeBirthdayHandler = () => {
        this.setState({
            birthday: this.state.newDate,
            show: true
        })
    };

    render(){
        return (
            <div className={classes.App}>
                <Form inline>
                    <h2>Please input your Birthday</h2>
                    <FormControl type="date" onChange={this.changeDateHandler}>
                    </FormControl>
                    <Button onClick={this.changeBirthdayHandler}>Submit</Button>
                    {
                        this.state.show ?
                            <div className={classes.fade + " " + classes.ageStats}>
                                <Contents date={this.state.birthday}/>
                            </div>
                            :
                            null
                    }
                </Form>
            </div>
        )
    }
}

export default App;