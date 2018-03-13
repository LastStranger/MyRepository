import React from "react";
import classes from './Input.css';

const input = (props) => {
    let inputELement = null;
    const inputClasses = [classes.InputElement];

    if(props.valid === false && props.touched){
        inputClasses.push(classes.InValid);

    }
    switch (props.elementType){
        case("input"):
            inputELement = <input className={inputClasses.join(" ")}
                                  {...props.elementConfig}
                                  value={props.value} onChange={props.changed}/>;
            break;
        case ("textarea"):
            inputELement = <textarea className={classes.InputElement}
                                     {...props.elementConfig}
                                     value={props.value} onChange={props.changed}/>;
            break;
        case ("select"):
            inputELement = (<select className={classes.InputElement}
                                    value={props.value} onChange={props.changed} >
                {{...props.elementConfig}.options.map(item => (
                    <option key={item.value} value={item.value}>{item.displayValue}</option>
                ))}

                                     </select>);
            break;
        default:
            inputELement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  value={props.value}/>;
            break;
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputELement}
        </div>
    )
};

export default input;