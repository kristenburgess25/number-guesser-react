const React = require('react');

class GuessRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
    };
  }

  shouldComponentUpdate({displayMessage}) {
    if(displayMessage==="YOU WIN! Click Reset to play again!") {
      let minInput = parseInt(this.state.min);
      let maxInput= parseInt(this.state.max);
      minInput -= 10;
      maxInput += 10;
      console.log('hello')
      this.setState({min: minInput , max: maxInput});
      return this.props.setRange(minInput, maxInput);
    }
  }


  setRange(displayMessage = '') {
    let minInput = parseInt(this.state.min);
    let maxInput= parseInt(this.state.max);
    this.setState({min: minInput , max: maxInput});
    return this.props.setRange(minInput, maxInput);
  }

  render() {

    return (
      <div className="GuessRange">
        <label>Min</label>
        <input id="minRange" value={this.state.min} onChange={(e) => this.setState({min:  e.target.value})} onBlur={() => this.setRange()} />
        <label>Max</label>
        <input label="Min" id="maxRange" value={this.state.max} onChange={(e) => this.setState({max: e.target.value})} onBlur={() => this.setRange()} />

      </div>
    )
  }
}

module.exports = GuessRange
