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
        <TopBar home={true}/>
        <Banner home={true}/>
        <BodyContent home={true}/>
        <MainForm/>
        <Reward/>
        <LiveWall/>
        <Video/>
        <Blog home={true}/>
        <Footer/>
        <Policy/>
      </div>
    );
  },
  componentDidMount: function () {
    var url = location.href;
    var tag = "#app"
    if (url.indexOf('main-form') > 0) {
      console.log($('#main-form').position().top);
      tag = "#main-form";
    }
    if (url.indexOf('reward') > 0) {
      console.log($('#reward').position().top);
      tag = "#reward";
    }
    if (url.indexOf('live-wall') > 0) {
      console.log($('#live-wall').position().top);
      tag = "#live-wall";
    }

    if (url.indexOf('video') > 0) {
      console.log($('#video').position().top);
      tag = "#video";
    }

    if (tag !== '#app') {
      setTimeout(function() {
        window.scrollTo(0, $(tag).position().top);
        console.log($(tag).position().top);
      }, 2000);
    }


  }
});

module.exports = Main;
