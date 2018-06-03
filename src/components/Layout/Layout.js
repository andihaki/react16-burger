import React from 'react';

import Aux from '../../hoc/Aux';
import css from './Layout.css';

// ga butuh <div></div>, karena udah react16, ini bakal return array
const layout = ( props ) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backrop
        </div>
        <main className={css.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;