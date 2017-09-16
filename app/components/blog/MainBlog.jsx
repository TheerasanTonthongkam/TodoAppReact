var React = require('react');
var Item = require('Item');
var services = require('Services');
var Loading = require('Loading');
var {Link, IndexLink} = require('react-router');
var React = require('react');
var Nav = require('Nav');
var TopBar = require('TopBar');
var Banner = require('Banner');
var BodyContent = require('BodyContent');
var Footer = require('Footer');
var Policy = require('Policy');

var MainBlog = React.createClass({

  render: function() {
    return (
      <div>
        <TopBar/>
        <Banner/>
        {this.props.children}
        <BodyContent/>
        <Footer/>
        <Policy/>
      </div>
    )
  }
});

module.exports = MainBlog;
