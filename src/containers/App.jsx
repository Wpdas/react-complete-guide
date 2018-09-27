import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import Person from '../components/Persons/Person/Person';

export const AuthContext = React.createContext(false);

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
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
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
    //(i) BEST PRACTICE TO MUTATE STATES
    // Using this.state inside this.setState is a bad practice
    // this.setState is an async function
    // this.setState({
    //   showPersons: !doesShow,
    //   toggleClicked: this.state.toggleClicked + 1
    // });

    //Solution (not using the current state, relying on the previous state)
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
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

    // <Aux></Aux> Jus wraps other components
    return (
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

// Name(APP) -> It's called Hight Order Component
// Wrap App component inside
// export default Radium(App);
// Props Proxy mode of use from HOC
export default withClass(App, classes.App);
// export default App;
