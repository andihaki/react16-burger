import React from 'react';

import css from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
    <header className={css.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav className={css.Nav}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;