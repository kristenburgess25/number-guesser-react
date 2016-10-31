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

    let disabled = this.state.guess.length === 0;

    return (
      <div className="PlayerGuess">
      <p> Your last guess was ... </p>
      <p id='guessNumber'> {this.state.lastguess} </p>
      <input id="guessInput" type="text" value={this.state.guess} onChange={(e) => this.setState({guess: e.target.value})} placeholder="Enter your best guess!"/>
      <button disabled={disabled} className="Guess" onClick={() => this.submitGuess()}> GUESS </button>
      <button disabled={disabled} className="Clear" onClick={() => this.clearMessage()}> CLEAR </button>
      <button className="Reset"> RESET </button>
      </div>
    )
  }
}


module.exports = PlayerGuess
