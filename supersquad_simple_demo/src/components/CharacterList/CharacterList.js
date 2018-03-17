import React, {Component} from "react";
import {connect} from "react-redux";
import {addCharacterById} from "../../actions/index";


class CharacterList extends Component {
    render(){
        return (
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {
                        this.props.characters.map(item => {
                            return (
                                <li key={item.id} className="list-group-item">
                                    <div className="list-item">{item.name}</div>
                                    <div className="list-item right-button"
                                         onClick={() => this.props.addCharacterById(item.id)
                                         }>+</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCharacterById: (id) => dispatch(addCharacterById(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);