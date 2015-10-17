(function () {
  "use strict";

  let React = require("react")
    , ReactDOM = require("react-dom")
    , good = require('./good');

    good();

  var Timer = React.createClass({
    getInitialState: function() {  // Like an initial constructor.
      return {
        seconds: 0
      };
    },
    incrementTimer: function() {  // A helper method for our Timer.
      this.setState({  // Use setState to modify state.
        seconds: this.state.seconds + 1  // Never modify state directly!
      });
    },
    componentDidMount: function() {  // A method run on initial rendering.
      setInterval(this.incrementTimer, 1000);
    },
    render: function() {
      return (
        <div>Seconds Elapsed: {this.state.seconds}</div>
      );
    }
  });
  ReactDOM.render(<Timer />, document.getElementById('timer'));
})();
