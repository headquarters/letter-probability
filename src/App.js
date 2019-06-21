import "./App.css";

import React from "react";
import { numbersAsWords } from "./numbers";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.calculateProbability = this.calculateProbability.bind(this);
    this.state = {
      letterCount: numbersAsWords.length,
      letter: "",
      matchCount: 0
    }
  }

  calculateProbability(ev) {
    // Grab only the last letter that was typed in
    const letter = ev.target.value.slice(-1);
    let matchCount = 0;

    if (ev.target.value.length === 0) {
      return this.setState({
        letter: "",
        matchCount: 0
      });
    }

    if (!/[a-zA-Z]/.test(letter)) {
      console.info(`${letter} is not a letter`);
      return;
    }

    const find = new RegExp(`${letter}`, "g");
    const matches = numbersAsWords.match(find);

    if (matches && matches.length) {
      matchCount = matches.length;
    }

    this.setState({
      letter,
      matchCount
    });
  }

  displayLetters() {
    const letters = numbersAsWords.split("");

    return letters.map((letter, index) => {
      return <span key={`${letter}-${index}`} className={letter}>{letter}</span>
    });
  }

  getPercentage() {
    return (Number.parseFloat(this.state.matchCount / this.state.letterCount) * 100).toPrecision(4);
  }

  render() {
    return (
      <div className="app">
        <h1>Letter Probabilities</h1>
        <p>
          The string at the bottom represents the numbers 1-123 spelled out in words.
          Type in a letter to see the count of times it appears in the string.
        </p>

        <form className="form">
          <div className="letter-input">
            <h2><label htmlFor="letter">Letter</label></h2>
            <input id="letter" type="text" onChange={this.calculateProbability} value={this.state.letter} placeholder="a" />
          </div>

          <div className="probability-output">
            <h2>Probability</h2>
            <div aria-live="polite" aria-atomic="true">
              {this.state.matchCount} / {this.state.letterCount} ({this.getPercentage()}%)
            </div>
          </div>
        </form>


        <p className="letters">
          <style dangerouslySetInnerHTML={{
            __html: `.${this.state.letter} { color: #ec1010 }`
          }} />
          {this.displayLetters()}
        </p>

      </div >
    );
  }
}

export default App;
