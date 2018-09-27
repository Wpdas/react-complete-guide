import React from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends React.PureComponent {
  render() {
    const { click, name, age, children, changed } = this.props;

    return (
      <WithClass classes={classes.Person}>
        <p onClick={click}>
          I'm {name} and I am {age} years old!
        </p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name} />
      </WithClass>
    );
  }
}

export default Person;
