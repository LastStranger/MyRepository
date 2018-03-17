import React, {Component} from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import HeroList from "./components/HeroList/HeroList";
import SquadStats from "./components/SquadStats/SquadStats";
import "./styles/index.css";
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="col-md-4">
                    <CharacterList/>
                </div>
                <div className="col-md-4">
                    <HeroList/>
                </div>
                <div className="col-md-4">
                    <SquadStats/>
                </div>
            </div>
        )
    }
}

export default App;