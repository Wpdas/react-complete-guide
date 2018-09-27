import React from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends React.PureComponent {
  render() {
    const { click, name, age, children, changed } = this.props;

    return (
      <Aux>
        <p onClick={click}>
          I'm {name} and I am {age} years old!
        </p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name} />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
