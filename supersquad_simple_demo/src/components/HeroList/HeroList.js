import React, {Component} from "react";
import {connect} from "react-redux";
import {removeCharacterById} from "../../actions/index";

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Your Hero Squad:</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return (
                                <li key={hero.id} className= "list-group-item">
                                    <div className="list-item">
                                        {hero.name}
                                    </div>
                                    <div className="list-item right-button" onClick={() => this.props.removeCharacter(hero.id)}>
                                        X
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        heroes:state.heroes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeCharacter: (id) => dispatch(removeCharacterById(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);