import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
    };
  }

  componentDidMount(){
    this.SetState(guesses: 2)
  };

  ReactDOM.render(
    <Application />, document.getElementById('application')
  );
  module.exports = Application;
