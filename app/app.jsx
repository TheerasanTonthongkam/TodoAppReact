var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Communication = require('Communication');
var EmployeeList = require('EmployeeList');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="employee" component={EmployeeList}/>
      <Route path="communication" component={Communication}/>
    </Route>
  </Router>,
  document.getElementById("app")
);
