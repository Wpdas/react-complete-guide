import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredients,
  price,
  purchaseCancelled,
  purchaseContinued
}) => {
  const ingredientsSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
