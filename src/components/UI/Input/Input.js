import React from 'react';

import css from './Input.css';

const input = props => {
    let inputElement = null;
    const inputClassCSS = [css.InputElement];
    let validationErrorMessage = null;    

    if(props.invalid && props.shouldValidate && props.touched){
        inputClassCSS.push(css.Invalid);
        validationErrorMessage = <p className={css.ValidationError}>Please enter a valid {props.valueType}!</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClassCSS.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClassCSS.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={inputClassCSS.join(' ')}                     
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
                className={inputClassCSS.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
    }
    return (
        <div className={css.Input} >
            <label className={css.Label} >{props.label}</label>   
            {inputElement}     
            {validationErrorMessage}   
        </div>
    );
};

export default input;