const React = require('react');
const ReactDOM = require('react-dom');
const PlayerGuess = require('./PlayerGuess');
const GuessRange = require('./GuessRange');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null,
      displayMessage: '',
      min: 0,
      max: 100
    };
  }

  componentDidMount(){
    this.generateRandomNumber();
  }

  generateRandomNumber(minInput, maxInput){
    console.log(minInput);
    console.log(maxInput);
    let min = Math.ceil(minInput) || 0;
    let max = Math.floor(maxInput) || 100;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({randomNumber: number
    });
  }

  checkGuess(guessInt) {
var randomNumber = this.state.randomNumber
console.log(randomNumber)
console.log(guessInt)
if (isNaN(guessInt)) {
  this.setState({displayMessage: "Please enter a valid number"})
}
if (randomNumber > guessInt) {
  this.setState({displayMessage: "Your guess was too low! Try again!"})
    }
if (randomNumber < guessInt) {
  this.setState({displayMessage: "Your guess was too high! Try again!"})
    }
if (randomNumber === guessInt) {
  this.setState({displayMessage: "YOU WIN! Click Reset to play again!"})
    }
}

  render () {
    return (
      <div className="Application">

              <header id="header">
                <h1 id="title"> NumberGuesser</h1>
              </header>

              <p>{this.state.displayMessage}</p>
              <PlayerGuess submitGuess={this.checkGuess.bind(this)} resetGame={this.generateRandomNumber.bind(this)} />

              <GuessRange setRange={this.generateRandomNumber.bind(this)}
                displayMessage={this.state.displayMessage}
              />

      </div>
    );
  }
}


ReactDOM.render(<App title='NumberGuesser' />, document.querySelector('#application'));
module.exports = App
