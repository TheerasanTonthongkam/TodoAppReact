var React = require('react');
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
    console.log('ddd');
  },
  componentWillUnmount: function() {
    window.scrollTo(0, 0);
  }
});

module.exports = BlogList;
