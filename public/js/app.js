(function () {
  "use strict";

  let React = require('react')
    , ReactDOM = require('react-dom')
    , InputArea = require('./components/InputArea');

  ReactDOM.render(<InputArea />, document.getElementById('left-input'));
  ReactDOM.render(<InputArea />, document.getElementById('right-input'));
})();
