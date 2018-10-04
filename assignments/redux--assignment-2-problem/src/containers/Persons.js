import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  generateNewPerson(name, age) {
    return {
      id: Math.random(),
      name: name,
      age: age
    };
  }

  render() {
    return (
      <div>
        <AddPerson
          personAdded={(name, age) => {
            const newPerson = this.generateNewPerson(name, age);
            this.props.onPersonAddedHandler(newPerson);
          }}
        />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAddedHandler: newPerson =>
      dispatch({ type: actionTypes.PERSON_ADDED, payload: newPerson }),
    onPersonDeletedHandler: personId =>
      dispatch({ type: actionTypes.PERSON_DELETED, payload: { personId } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
