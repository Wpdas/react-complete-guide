import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axiosOrders from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: this.inputSetup('input', 'text', 'Your Name'),
      street: this.inputSetup('input', 'text', 'Street'),
      zipCode: this.inputSetup('input', 'text', 'ZIP Code', '', true, 5, 5),
      country: this.inputSetup('input', 'text', 'Country'),
      email: this.inputSetup('input', 'text', 'Your Mail'),
      deliveryMethod: {
        elementType: 'select',
        elementConfig: [
          {
            value: 'fastest',
            displayValue: 'Fastest'
          },
          {
            value: 'cheapest',
            displayValue: 'Cheapest'
          }
        ],
        value: 'fastest',
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  };

  inputSetup(
    elementType = 'input',
    contentType = 'text',
    placeholder = '',
    value = '',
    required = true,
    minLength = 3,
    maxLength = 99
  ) {
    return {
      elementType,
      elementConfig: {
        type: contentType,
        placeholder
      },
      value,
      validation: {
        required,
        minLength,
        maxLength
      },
      valid: false,
      touched: false
    };
  }

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };

    axiosOrders
      .post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push('/'); //Back to the home/starting page
      })
      .catch(() => this.setState({ loading: false }));
  };

  // To check validation
  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    // OBS: State must be immutable, so...
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    // Check validation
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    const formInputs = formElementsArray.map(formElement => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={event => this.inputChangedHandler(event, formElement.id)}
        />
      );
    });

    let form = (
      <form onSubmit={this.orderHandler}>
        {formInputs}
        <Button
          buttonType="Success"
          clicked={this.orderHandler}
          disabled={!this.state.formIsValid}
        >
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
