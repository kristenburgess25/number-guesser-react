const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const PlayerGuess = require('./PlayerGuess')


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: [],
    };
  }

  componentDidMount(){
    var number = Math.floor((Math.random() * 100) + 1);
    this.setState({randomNumber: number});
  }

  checkGuess(guess) {
//if guess entered by user matches random number, give winning Message
//message for number too low
//message for number too high
  }


  render () {
    return (
      <div className="Application">

              <header id="header">
                <h1 id="title"> NumberGuesser</h1>
              </header>

              <main className="body">
                <PlayerGuess submitGuess={this.checkGuess.bind(this)} />
              </main>

              <footer id="footer">
              </footer>

            </div>
          );
        }
      }


ReactDOM.render(<App title='Weathrly' />, document.querySelector('#application'));
module.exports = App
