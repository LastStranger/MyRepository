import React, {Component} from "react";


class TestImg extends Component {
    constructor () {
        super();
        this.state = {
            pictures: []
        }
    }

    componentDidMount () {
        fetch("https://randomuser.me/api/?results=500").then(results => {
            return results.json()
        }).then(data => {
            let pictures = data.results.map(pic => {
                return (
                    <div className="test-img" key={pic.login.md5}>
                        <img
                            src={pic.picture.medium} alt="pic.name.title"/>
                    </div>
                )
            });
            this.setState({
                pictures: pictures
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.pictures}
            </div>
        )
    }
}

export default TestImg;