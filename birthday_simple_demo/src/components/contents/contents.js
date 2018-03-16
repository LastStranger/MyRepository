import React, {Component} from "react";
import imge from "../../assets/party-popper.jpg";
import classes from "./contents.css";
class contents extends Component{
    timeSince = (date) => {
        let today = new Date().getTime();
        let otherDate = new Date(date).getTime();
        let difference = Math.abs(today - otherDate);

        let days = Math.floor(difference/(1000*3600*24));
        let years = Math.floor(days/365);
        days -= years * 365;
        let months = Math.floor(days/31);
        days -= months * 31;
        return `${years} years  ${months} months  ${days} days`
    };

    render () {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>You've been through {this.timeSince(this.props.date)}</h4>
                <img src={imge} alt="haha" className={classes.img}/>
            </div>
        );
    }
}

export default contents;