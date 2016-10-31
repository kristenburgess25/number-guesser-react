const React = require('react');

class PlayerGuess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      lastguess: '',
    };
  }

  clearInput() {
    this.setState({guess: ''});
  }

  submitGuess() {
    const guessInt = parseInt(this.state.guess)
    this.props.submitGuess(guessInt);
    this.setState({lastguess: this.state.guess})
    this.clearInput();
  }

  clearMessage() {
  document.getElementById('guessInput').value='';
  this.clearInput();
  }


  render() {

    return (
      <div className="PlayerGuess">
      <p> Your last guess was ... </p>
      <p id='guessNumber'> {this.state.lastguess} </p>
      <input id="guessInput" type="text" value={this.state.guess} onChange={(e) => this.setState({guess: e.target.value})} placeholder="Enter your best guess!"/>
      <button className="Guess" onClick={() => this.submitGuess()}> GUESS </button>
      <button className="Clear" onClick={() => this.clearMessage()}> CLEAR </button>
      <button className="Reset"> RESET </button>
      </div>
    )
  }
}


module.exports = PlayerGuess
