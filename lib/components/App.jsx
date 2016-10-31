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
    var number = Math.floor((Math.random() * 100) + 1);
    this.setState({randomNumber: number});
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
  document.getElementById('player-message').innerHTML="You win!"
    }
  }


  render () {
    return (
      <div className="Application">

              <header id="header">
                <h1 id="title"> NumberGuesser</h1>
              </header>

              <p id="player-message"> Enter a number between 1 and 100 </p>
              <PlayerGuess submitGuess={this.checkGuess.bind(this)} />

              <GuessRange />

            </div>
          );
        }
      }


ReactDOM.render(<App title='Weathrly' />, document.querySelector('#application'));
module.exports = App
