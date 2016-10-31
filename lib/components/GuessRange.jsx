const React = require('react');

class GuessRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
    };
  }

  setRange() {
    debugger;
    if(document.getElementById('player-message').innerHTML="Your guess was too low! Try again!") {
      let minInput = parseInt(this.state.min) - 10;
      let maxInput = parseInt(this.state.max) + 10;
      this.setState({min: minInput , max: maxInput});
    } else {
    let minInput = this.state.min;
    let maxInput= this.state.max;
    this.props.setRange(minInput, maxInput)
  }
}

  render() {

    return (
      <div className="GuessRange">
        <label for="minimum guess">Min</label>
        <input id="minRange" value={this.state.min} onChange={(e) => this.setState({min: e.target.value})} onBlur={() => this.setRange()} placeholder={this.state.min}/>
        <label for="maximum guess">Max</label>
        <input label="Min" id="maxRange" value={this.state.max} onChange={(e) => this.setState({max: e.target.value})} onBlur={() => this.setRange()} placeholder={this.state.max}/>
      </div>
    )
  }
}

module.exports = GuessRange
