import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = 0;
        // extracting : bacon=2&cheese=1&meat=0&salad=0
        for (let param of query.entries()){
            if(param[0] === 'price'){
                totalPrice = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients, totalPrice});
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>}
                    />
            </div>
        );
    }
}

export default Checkout;