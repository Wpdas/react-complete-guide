import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// (i) Using PureComponent, React automaticaly handler of using
// shouldCompomentUpdate lifecycle, doing it by comparing primitives props.
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Manu', age: 18, id: 0 },
        { name: 'Wenderson', age: 28, id: 1 },
        { name: 'Lucrecia', age: 27, id: 2 }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMont');
  }

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

// Name(APP) -> It's called Hight Order Component
// Wrap App component inside
// export default Radium(App);
export default App;
