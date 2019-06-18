import React from 'react';
import './App.css';
import { words } from "./numbers";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.calculateProbability = this.calculateProbability.bind(this);
  }

  calculateProbability(ev) {
    const letter = ev.key;
    const code = ev.keyCode;

    if (code < 65 || code > 90) {
      console.log("Not a letter");
    }


    const find = new RegExp(`${letter}`, "g");
    const matches = words.match(find);

    if (matches && matches.length) {
      console.log("found matches", matches);
    } else {
      console.log("no matches for ", letter);
    }

  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.calculateProbability} />
      </div >
    );
  }
}

export default App;
