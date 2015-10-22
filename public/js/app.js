(function () {
  "use strict";

  let React = require('react')
    , ReactDOM = require('react-dom')
    , InputArea = require('./components/InputArea');

  require("../css/site.less");

  ReactDOM.render(<InputArea ace="left-input" />, document.getElementById('left-container'));
  ReactDOM.render(<InputArea ace="right-input" />, document.getElementById('right-container'));
})();
