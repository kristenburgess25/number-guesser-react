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
    const minInput = this.state.min;
    const maxInput= this.state.max;
    this.props.setRange(minInput, maxInput)
  }

  render() {

    return (
      <div className="GuessRange">
        <label for="minimum guess">Min</label>
        <input id="minRange" value={this.state.min} onChange={(e) => this.setState({min: e.target.value})} onClick={() => this.setRange()} placeholder={this.state.min}/>
        <label for="maximum guess">Max</label>
        <input label="Min" id="maxRange" value={this.state.max} onChange={(e) => this.setState({max: e.target.value})} onClick={() => this.setRange()} placeholder={this.state.max}/>
      </div>
    )
  }
}

module.exports = GuessRange
