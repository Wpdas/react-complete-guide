import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Manu', age: 18, id: 0 },
      { name: 'Wenderson', age: 28, id: 1 },
      { name: 'Lucrecia', age: 27, id: 2 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this.setState({ persons: persons });
    this.setState({ persons }); //ES6
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons; BAD (changes the original)
    const persons = [...this.state.persons]; // GOOD
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // Inline style
    let styles = {
      button: {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          changed={event => this.nameChangedHandler(event, index)}
          key={person.id}
        >
          My hobby: General.
        </Person>
      ));

      styles.button.backgroundColor = 'red';
    }

    // To use style classes dinamicaly
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={styles.button}
          type="button"
          onClick={this.togglePersonHandler}
        >
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

// Name(APP) -> It's called Hight Order Component
// Wrap App component inside
// export default Radium(App);
export default App;
