import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import css from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props);
        this.setState({ loading: true });
        const order = {
            ingredients : this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'John Wick',
                address: {
                    street: 'sesame',
                    zipcode: '010101',
                    country: 'us',
                },
                email: 'john@wick.com'
            },
            deliveryMethod: 'same day'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={css.Input} type="text" name="name" placeholder="Your Name" />
                <input className={css.Input} type="email" name="email" placeholder="Your Email" />
                <input className={css.Input} type="text" name="street" placeholder="Street" />
                <input className={css.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={css.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;