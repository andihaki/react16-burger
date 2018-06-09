import React from 'react';

import burgerLogo from '../../assets/burger-logo.png';
import css from './Logo.css';

const logo = (props) => (
    <div className={css.Logo}>
        <img src={burgerLogo} alt="yummy"/>
    </div>
);

export default logo;