var React = require('react');
var Item = require('Item');
var services = require('Services');
var Loading = require('Loading');
var WhatsYourWhy = require('WhatsYourWhy');
var Blog = require('Blog');

var BlogList = React.createClass({

  render: function() {
    return (
      <div>
        <WhatsYourWhy />
        <div className="red-line"></div>
        <Blog />
        <br />
        <br />
      </div>
    );
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  componentWillUnmount: function() {
    window.scrollTo(0, 0);
  }
});

module.exports = BlogList;
