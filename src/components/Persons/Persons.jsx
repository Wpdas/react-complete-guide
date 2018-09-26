import React from 'react';
import Person from './Person/Person';

class Persons extends React.PureComponent {
  render() {
    const { persons, clicked, changed } = this.props;

    return persons.map((person, index) => (
      <Person
        click={() => clicked(index)}
        name={person.name}
        age={person.age}
        changed={event => changed(event, index)}
        key={person.id}
      >
        My hobby: General.
      </Person>
    ));
  }
}

export default Persons;
