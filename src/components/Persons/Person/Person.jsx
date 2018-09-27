import React from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef(); //v16.3.x +
  }
  componentDidMount() {
    // Ref -> It's available only in Statefull Component
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    const { click, name, age, children, changed } = this.props;

    return (
      <Aux>
        <p onClick={click}>
          I'm {name} and I am {age} years old!
        </p>
        <p>{children}</p>
        <input
          type="text"
          ref={this.inputElement}
          onChange={changed}
          value={name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  position: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
