import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import css from './Auth.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

class Auth extends Component{
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false,
            },
        },
        isSignup: true,
    };

    componentDidMount(){
        if (!this.props.buildingBurder && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        };
    };

    

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validity),
                touched: true,
            })
        });
        this.setState({controls: updatedControls, });
    };

    submitHandler = (event) => {
        event.preventDefault();   
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    };

    switchAuthButtonHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup};
        });
    };

    render(){
        const formElementsArray = [];
        for (let key in this.state.controls){            
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }        

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                valueType={formElement.config.elementConfig.placeholder}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
        ));

        if (this.props.loading) {
            form = <Spinner />;
        };

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <div>{this.props.error}</div>;
        };

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />;
        };

        return (
          <div className={css.Auth}>
                {authRedirect}
                <h3>{errorMessage}</h3>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
              <Button
                clicked={this.switchAuthButtonHandler}
                btnType="Danger"
                >Switch to {this.state.isSignup ? 'SignIn' : 'SignUp' }</Button>
          </div>  
        );
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurder: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);