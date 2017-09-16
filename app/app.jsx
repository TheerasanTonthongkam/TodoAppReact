var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Communication = require('Communication');
var Employee = require('Employee');
var LiveWallPage = require('LiveWallPage');
var BlogList = require('BlogList');
var BlogDetail = require('BlogDetail');
var MainBlog = require('MainBlog');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Main}/>
      <Route path="livewall" component={LiveWallPage}/>
      <Route path="blog" component={MainBlog}>
          <IndexRoute component={BlogList}/>
          <Route path=":id" component={BlogDetail}/>
      </Route>
      <Route path="*" component={Main}/>
    </Route>
  </Router>,
  document.getElementById("app")
);
