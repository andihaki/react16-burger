import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './NavigationItem.css';

const navigationItem = (props) => (        
    <li className={css.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={css.active}
            >{props.children}</NavLink>
    </li>
);

export default navigationItem;