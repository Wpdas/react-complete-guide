import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = ({ appTitle, persons, showPersons, clicked }) => {
  // To use style classes dinamicaly
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>{appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} type="button" onClick={clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default Cockpit;
