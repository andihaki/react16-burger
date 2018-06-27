import React from 'react';

import css from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[css.Button, css[props.btnType]].join(' ')} // supaya hasilnya one line string
        onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button;