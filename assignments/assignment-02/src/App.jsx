import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    currentText: ''
  };

  onTypeHandler = event => {
    this.setState({
      currentText: event.target.value
    });
  };

  deleteCharHandler = charIndex => {
    const text = this.state.currentText.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({ currentText: updatedText });
  };

  render() {
    let letters = this.state.currentText.split('');
    let chars = null;
    if (letters.length >= 5) {
      chars = letters.map((char, index) => (
        <CharComponent
          char={char}
          key={index}
          click={() => this.deleteCharHandler(index)}
        />
      ));
    }

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.onTypeHandler}
          value={this.state.currentText}
        />
        <ValidationComponent text={this.state.currentText} />
        {chars}
      </div>
    );
  }
}

export default App;
