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
        <Blog />
        <br />
        <br />
      </div>
    );
  }
});

module.exports = BlogList;
