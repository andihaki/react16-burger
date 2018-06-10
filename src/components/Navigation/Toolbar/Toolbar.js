import React from 'react';

import css from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={css.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={css.Logo}>
            <Logo/>
        </div>
        <nav className={css.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;