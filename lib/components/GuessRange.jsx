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
    const min = this.state.min;
    const max= this.state.max;
    this.props.setRange(min, max)
  }

  render() {

    return (
      <div className="GuessRange">
        <label for="minimum guess">Min</label>
        <input id="minRange" value={this.state.min} onChange={(e) => this.setState({min: e.target.value})} placeholder={this.state.min}/>
        <label for="maximum guess">Max</label>
        <input label="Min" id="maxRange" value={this.state.max} onChange={(e) => this.setState({max: e.target.value})} placeholder={this.state.max}/>
      </div>
    )
  }
}

module.exports = GuessRange
