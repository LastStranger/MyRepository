import React, {Component} from "react";
import {connect} from "react-redux";
import "./styles/index.css";
import MemeItem from "./components/MemeItem";
import {ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import MyMemes from "./components/MyMemes";
import TestImg from "./components/TestImg";

class App extends Component {
    constructor () {
        super();

        this.state = {
            memeLimit:10,
            text0: "",
            text1: "",
        }
    }

    render(){
        return (
            <div>
                <h2>Hello World</h2>
                <TestImg/>
                <MyMemes/>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Top</ControlLabel>
                        <FormControl type="text" onChange={event => this.setState({text0: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Bottom</ControlLabel>
                        <FormControl type="text" onChange={event => this.setState({text1: event.target.value})}/>
                    </FormGroup>
                </Form>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((item, index) => {
                        return (
                            <MemeItem key={index}
                                      meme={item}
                                      text0={this.state.text0}
                                      text1={this.state.text1}
                            />
                        )
                    })
                }
                <div className="meme-button" onClick={() => {
                    this.setState({
                        memeLimit: this.state.memeLimit + 10
                    })
                }}>Load ten more memes...</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        memes: state.memes
    }
};

export default connect(mapStateToProps, null)(App);