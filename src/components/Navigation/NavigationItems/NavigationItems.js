import React from 'react';

import css from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={css.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders" >Orders</NavigationItem>
        <NavigationItem link="/auth" >Auth</NavigationItem>
    </ul>
);

export default navigationItems;