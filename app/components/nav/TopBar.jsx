var React = require('react');
var {Link, IndexLink} = require('react-router');

var TopBar = React.createClass({
  render: function () {
    return (
      <div id="main-menu-container">
        <img id="logo" src="../img/logo_aia.png"/>
        <ul id="desktop-menu" className="menu align-right show-for-large" data-smooth-scroll data-animation-easing="swing" data-threshold="0">
          <li><a href="#body-content">#W<span className="text-small">hats</span>Y<span className="text-small">our</span>W<span className="text-small">hy</span></a></li>
          <li><a href="#main-form">ร่วมกิจกรรม</a></li>
          <li><a href="#reward">รางวัล</a></li>
          <li><a href="#live-wall">ดู Live Wall</a></li>
          <li><a target="_blank" href="http://www.aia.com/en/about-aia/contact-us.html" ><img src="../img/mail.png"/></a></li>
        </ul>
        <ul id="phone-menu" className="menu align-right hide-for-large dropdown" data-dropdown-menu>
          <li>
            <a href="#">
              <img src="../img/ic_menu.png"/>
            </a>
            <ul id="phone-menu-list" className="menu" data-smooth-scroll data-animation-easing="swing" data-threshold="0">
                <li><a className="sub-menu" href="#body-content">#W<span className="text-small">hats</span>Y<span className="text-small">our</span>W<span className="text-small">hy</span></a></li>
                <li><a className="sub-menu" href="#main-form">ร่วมกิจกรรม</a></li>
                <li><a className="sub-menu" href="#reward">รางวัล</a></li>
                <li><a className="sub-menu" href="#live-wall">ดู Live Wall</a></li>
                <li><a className="sub-menu" target="_blank" href="http://www.aia.com/en/about-aia/contact-us.html" ><img src="../img/mail.png"/></a></li>
            </ul>
          </li>
        </ul>

        <a id="up-button" href="#main-menu-container" data-smooth-scroll data-animation-easing="swing" data-threshold="0">
          <img src="../img/ic_up.png"/>
        </a>
      </div>
    );
  },
  componentDidMount: function () {
    var elem = new Foundation.DropdownMenu($('#phone-menu'), null);
    var elem = new Foundation.SmoothScroll($('#desktop-menu'), null);
    var elem = new Foundation.SmoothScroll($('#phone-menu-list'), null);
    var elem = new Foundation.SmoothScroll($('#main-menu-container'), null);
  }
});

module.exports = TopBar;
