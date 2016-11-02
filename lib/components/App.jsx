const React = require('react');
const ReactDOM = require('react-dom');
const PlayerGuess = require('./PlayerGuess');
const GuessRange = require('./GuessRange');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null,
      min: 0,
      max: 100,
      displayMessage: "Enter a number between 1 and 100, then click GUESS",
    };
  }

  componentDidMount(){
    this.generateRandomNumber();
  }

  generateRandomNumber(minInput, maxInput){
    let min = Math.ceil(this.state.min) ;
    let max = Math.floor(this.state.max) ;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({randomNumber: number
    });
  }

  checkGuess(guessInt) {
var randomNumber = this.state.randomNumber
var min = this.state.min
var max = this.state.max
console.log(randomNumber)
console.log(guessInt)
if (min > guessInt || max < guessInt) {
  this.setState({displayMessage: "Your guess is outside of the set range! Try again!"})
    }
else if (isNaN(guessInt)) {
  this.setState({displayMessage: "Please enter a valid number"})
    }
else if (randomNumber > guessInt) {
  this.setState({displayMessage: "Your guess was too low! Try again!"})
    }
else if (randomNumber < guessInt) {
  this.setState({displayMessage: "Your guess was too high! Try again!"})
    }
else if (randomNumber === guessInt) {
  this.setState({displayMessage: "YOU WIN! Guess within the new range or set your own!"})
  this.winningRange();
    }
}

setRange() {
  let minInput = parseInt(this.state.min);
  let maxInput= parseInt(this.state.max);
  this.setState({min: minInput , max: maxInput});
  this.generateRandomNumber();
}

winningRange() {
    let minInput = parseInt(this.state.min);
    let maxInput= parseInt(this.state.max);
    minInput -= 10;
    maxInput += 10;
    console.log('hello')
    this.setState({min: minInput , max: maxInput});
    this.generateRandomNumber();
  }

  reset() {
    this.setState({min: 0, max: 100})
  }


  render () {
    return (
      <div className="Application">
        <h1 id="title"> NumberGuesser</h1>
          <p>{this.state.displayMessage}</p>
          <PlayerGuess submitGuess={this.checkGuess.bind(this)} resetGame={this.reset.bind(this)} />
          <div className="GuessRange">
              <label>Min</label>
              <input id="minRange" placeholder={this.state.min} value={this.state.min} onChange={(e) => this.setState({min: e.target.value})} onBlur={() => this.setRange()} />
              <label>Max</label>
              <input label="Min" id="maxRange" placeholder={this.state.max} value={this.state.max} onChange={(e) => this.setState({max: e.target.value})} onBlur={() => this.setRange()} />
          </div>
      </div>
    );
  }
}


ReactDOM.render(<App title='NumberGuesser' />, document.querySelector('#application'));
module.exports = App
