var React = require('react');
var Nav = require('Nav');
var TopBar = require('TopBar');
var Banner = require('Banner');
var BodyContent = require('BodyContent');
var MainForm = require('MainForm');
var Reward = require('Reward');
var LiveWall = require('LiveWall');
var Video = require('Video');
var WhatsYourWhy = require('WhatsYourWhy');
var Blog = require('Blog');
var Footer = require('Footer');
var Policy = require('Policy');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <TopBar/>
        <Banner/>
        <BodyContent/>
        <MainForm/>
        <Reward/>
        <LiveWall/>
        <Video/>
        <Footer/>
        <Policy/>
      </div>
    );
  },
  componentDidMount: function () {
    //var elem = new Foundation.OffCanvas($('#offCanvas'), false);
  },
  componentWillUnmount: function() {
    window.scrollTo(0, 0);
  }
});

module.exports = Main;
