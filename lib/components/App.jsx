const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const PlayerGuess = require('./PlayerGuess');
const GuessRange = require('./GuessRange');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null,
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
    this.setState({randomNumber: number});
  }

  reset(number){
  this.generateRandomNumber();
  };

  winningRange(newMin, newMax){
    this.generateRandomNumber();
  }

  checkGuess(guessInt) {
var randomNumber = this.state.randomNumber
console.log(randomNumber)
console.log(guessInt)
if (isNaN(guessInt)) {
  document.getElementById('player-message').innerHTML="Please enter a valid number"
}
if (randomNumber > guessInt) {
  document.getElementById('player-message').innerHTML="Your guess was too low! Try again!"
    }
if (randomNumber < guessInt) {
  document.getElementById('player-message').innerHTML="Your guess was too high! Try again!"
    }
if (randomNumber === guessInt) {
  document.getElementById('player-message').innerHTML="YOU WIN! Click Reset to play again!";
    }
  }



  render () {
    return (
      <div className="Application">

              <header id="header">
                <h1 id="title"> NumberGuesser</h1>
              </header>

              <p id="player-message"> Enter a number between 1 and 100 </p>
              <PlayerGuess submitGuess={this.checkGuess.bind(this)} resetGame={this.reset.bind(this)} />

              <GuessRange setRange={this.generateRandomNumber.bind(this)}/>

            </div>
          );
        }
      }


ReactDOM.render(<App title='Weathrly' />, document.querySelector('#application'));
module.exports = App
