// const React = require('react');
//
// class GuessRange extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       min: '',
//       max: 'null'
//     };
//   }
//
//   winningRange({displayMessage}) {
//     if(displayMessage==="YOU WIN! Click Reset to play again!") {
//       let minInput = parseInt(this.state.min);
//       let maxInput= parseInt(this.state.max);
//       minInput -= 10;
//       maxInput += 10;
//       console.log('hello')
//       this.setState({min: minInput , max: maxInput});
//       return this.props.winningRange(minInput, maxInput);
//     }
//   }
//
//   setRange() {
//     let minInput = parseInt(this.state.min);
//     let maxInput= parseInt(this.state.max);
//     this.setState({min: minInput , max: maxInput});
//     return this.props.setRange(minInput, maxInput);
//   }
//
//   render() {
//
//     return (
//       <div className="GuessRange">
//         <label>Min</label>
//         <input id="minRange" placeholder="0" value={this.state.min} onChange={(e) => this.setState({min: e.target.value})} onBlur={() => this.setRange()} />
//         <label>Max</label>
//         <input label="Min" id="maxRange" placeholder="100" value={this.state.max} onChange={(e) => this.setState({max: e.target.value})} onBlur={() => this.setRange()} />
//
//       </div>
//     )
//   }
// }
//
// module.exports = GuessRange
