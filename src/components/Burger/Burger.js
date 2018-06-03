import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import css from './Burger.css';

const burger = (props) => {
    // convert object to array
    let transformIngredients = Object.keys(props.ingredients).map(igKey => 
        {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => { // reduce, untuk handle ingridients = kosong
            return arr.concat(el)
        }, []); // }, [] = intitial valuenya = array kosong
    
    if (transformIngredients.length ===  0) {
        transformIngredients = <p>please start adding ingredients</p>;
    }
    
    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;