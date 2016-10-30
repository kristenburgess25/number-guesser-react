const React = require('react');

class PlayerGuess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
    };
  }

  clearInput() {
    this.setState({guess: ''});
  }




  render() {
    return (
      <div className="PlayerGuess">
      <p> Your last guess was ... </p>
      <p> ## </p>
      <p> Message to player - too high or low </p>
      <input className="guessNumber" placeholder="Enter your best guess!"/>
      <button className="Guess"> GUESS </button>
      <button className="Clear"> CLEAR </button>
      <button className="Reset"> RESET </button>
      </div>
    )
  }
}


module.exports = PlayerGuess
