import React from 'react';
import './App.css';
import { words } from "./numbers";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.calculateProbability = this.calculateProbability.bind(this);
    this.state = {
      letterCount: words.length,
      letter: "",
      matchCount: 0
    }
  }

  calculateProbability(ev) {
    const letter = ev.target.value.slice(-1);
    const code = letter.charCodeAt();
    let matchCount = 0;

    if (ev.target.value.length === 0) {
      return this.setState({
        letter: "",
        matchCount: 0
      });
    }

    if (code < 65 || code > 122) {
      console.info("Not a letter");
      return;
    }

    const find = new RegExp(`${letter}`, "g");
    const matches = words.match(find);

    if (matches && matches.length) {
      matchCount = matches.length;
    }

    this.setState({
      letter,
      matchCount
    });
  }

  displayLetters() {
    const letters = words.split("");

    return letters.map((letter, index) => {
      return <span key={`${letter}-${index}`} className={letter}>{letter}</span>
    });
  }

  getPercentage() {
    return 100 * Number.parseFloat(this.state.matchCount / this.state.letterCount).toPrecision(4);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.calculateProbability} value={this.state.letter} />

        {this.state.matchCount} / {this.state.letterCount} ({this.getPercentage()}%)

        <div>

          <style dangerouslySetInnerHTML={{
            __html: `.${this.state.letter} { color: red }`
          }} />
          {this.displayLetters()}
        </div>

      </div >
    );
  }
}

export default App;
