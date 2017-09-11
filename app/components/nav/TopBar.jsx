var React = require('react');
var {Link, IndexLink} = require('react-router');

var TopBar = React.createClass({
  render: function () {
    return (
      <div id="main-menu-container">
        <img id="logo" src="../img/logo_aia.png"/>
        <ul id="desktop-menu" className="menu align-right show-for-large" data-smooth-scroll data-animation-easing="swing" data-threshold="0">
          <li><a href="#body-content">เกี่ยวกับ#WhatsYourWhy</a></li>
          <li><a href="#main-form">ร่วมกิจกรรม</a></li>
          <li><a href="#reward">รางวัล</a></li>
          <li><a href="#live-wall">ดู Live Wall</a></li>
          <li><a href="#video">เคล็ดลับสุขภาพดี</a></li>
          <li><a target="_blank" href="http://www.aia.com/en/about-aia/contact-us.html" ><img src="../img/mail.png"/></a></li>
        </ul>
        <ul id="phone-menu" className="menu align-right hide-for-large dropdown" data-dropdown-menu>
          <li>
            <a href="#">
              <img src="../img/ic_menu.png"/>
            </a>
            <ul className="menu">
                <li><a className="sub-menu" href="#">เกี่ยวกับ#WhatsYourWhy</a></li>
                <li><a className="sub-menu" href="#">ร่วมกิจกรรม</a></li>
                <li><a className="sub-menu" href="#">รางวัล</a></li>
                <li><a className="sub-menu" href="#">ดู Live Wall</a></li>
                <li><a className="sub-menu" href="#">เคล็ดลับสุขภาพดี</a></li>
                <li><a className="sub-menu" href="#"><img src="../img/mail.png"/></a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  },
  componentDidMount: function () {
    var elem = new Foundation.DropdownMenu($('#phone-menu'), null);
    var elem = new Foundation.SmoothScroll($('#desktop-menu'), null);
  }
});

module.exports = TopBar;
