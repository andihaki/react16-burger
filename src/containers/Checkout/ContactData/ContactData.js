import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import css from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
    }

    render() {
        return(
            <div className={css.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={css.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={css.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={css.Input} type="text" name="street" placeholder="Street" />
                    <input className={css.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;