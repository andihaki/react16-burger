// untuk order summary
import React from 'react';

import css from './Modal.css';

const modal = (props) => (
    <div className={css.Modal}>
        {props.children}
    </div>
)

export default modal;