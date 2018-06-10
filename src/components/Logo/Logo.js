import React from 'react';

import burgerLogo from '../../assets/burger-logo.png';
import css from './Logo.css';

const logo = (props) => (
    <div className={css.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="yummy"/>
    </div>
);

export default logo;