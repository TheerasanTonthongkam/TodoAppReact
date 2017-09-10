var React = require('react');
var {Link, IndexLink} = require('react-router');

var BodyContent = React.createClass({
  render: function () {
    return (
      <div>
        <img className="banner hide-for-large" src="../img/banner_mobile.png"/>
        <img className="banner show-for-large" src="../img/banner_desktop.png"/>

      </div>
    );
  },
  componentDidMount: function () {

  }
});

module.exports = BodyContent;
