import React, {Component} from "react";
import {connect} from "react-redux";
import {createMeme} from "../actions/index";


class MemeItem extends Component{
    constructor() {
        super();

        this.state = {
            hover: false
        }
    }

    postMemes = () => {
        const {text0, text1} = this.props;
        const memObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        };
        this.props.createMeme(memObj)
    };

    render() {
        return (
            <div className="meme-item"
                 onMouseEnter={() => this.setState({hover: true})}
                 onMouseLeave={() => this.setState({hover: false})}
                 onClick={() => this.postMemes()}
            >
                <img className={this.state.hover? "meme-img darker-img": "meme-img"} src={this.props.meme.url} alt="this.props.name"/>
                <p className={this.state.hover? "meme-txt": "no-txt"}>{this.props.meme.name}</p>
            </div>
        )
    }
}

const DispatchStateToProps = dispatch => {
    return {
        createMeme: (meme) => dispatch(createMeme(meme))
    }
};

export default connect(null, DispatchStateToProps)(MemeItem);