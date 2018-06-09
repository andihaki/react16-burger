import React from 'react';

import css from './Backdrop.css';

// kalo backdropnya di klik, maka modal akan hilang
const backdrop = (props) => (
    props.show ? <div className={css.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;