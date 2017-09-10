var React = require('react');
var Nav = require('Nav');
var TopBar = require('TopBar');
var Banner = require('Banner');
var BodyContent = require('BodyContent');
var MainForm = require('MainForm');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <TopBar/>
        <Banner/>
        <BodyContent/>
        <MainForm/>
      </div>
    );
  },
  componentDidMount: function () {
    //var elem = new Foundation.OffCanvas($('#offCanvas'), false);
  }
});

module.exports = Main;
