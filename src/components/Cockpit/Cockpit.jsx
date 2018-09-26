import React from 'react';
import classes from './Cockpit.css';

const Cockpit = ({ appTitle, persons, showPersons, clicked }) => {
  // To use style classes dinamicaly
  const assignedClasses = [];
  let btnClass = '';
  if (showPersons) {
    btnClass = classes.Red;
  }

  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} type="button" onClick={clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
