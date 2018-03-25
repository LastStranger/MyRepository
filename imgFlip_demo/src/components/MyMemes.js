import React from "react";
import {connect} from "react-redux";


const myMemes = (props) => {
    return (
        <div>
            {
                props.myMemes.map((item, index) => {
                    return (
                        <img src={item.data.url}
                             alt="my-meme"
                             key={index}
                             className="my-meme"
                        />
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        myMemes: state.myMemes
    }
};

export default connect(mapStateToProps, null)(myMemes);