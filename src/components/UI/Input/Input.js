import React from 'react';

import css from './Input.css';

const input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={css.Input} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={css.Input} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={css.Input}                     
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={css.Input} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
    }
    return (
        <div className={css.Input} >
            <label className={css.Label} >{props.label}</label>   
            {inputElement}        
        </div>
    );
};

export default input;