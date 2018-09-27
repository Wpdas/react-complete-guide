import React from 'react';
import Person from './Person/Person';

class Persons extends React.PureComponent {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }

  componentDidMount() {
    //Cals the inside method of Person (without S)
    this.lastPersonRef.current.focus();
  }

  render() {
    const { persons, clicked, changed } = this.props;

    return persons.map((person, index) => (
      <Person
        click={() => clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        changed={event => changed(event, index)}
        key={person.id}
        ref={this.lastPersonRef}
      >
        My hobby: General.
      </Person>
    ));
  }
}

export default Persons;
