var React = require('react');
var {Link, IndexLink} = require('react-router');

var TopBar = React.createClass({
  clickLogout: function(e) {
    e.preventDefault();
    alert("out");
  },
  getInitialState: function() {
    var that = this;
    var id = -1;
    if (that.getCookie("userId") !== undefined || that.getCookie("userId") !== "") {
      id = that.getCookie("userId");
    }
    return {
      login: (that.getCookie("userId") !== undefined),
      id: id
    };
  },
  onClickMail: function(e) {
    e.preventDefault();
    location.href = "http://www.aia.com/en/about-aia/contact-us.html";
  },
  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  },
  render: function () {

    var {id} = this.state;
    var that = this;
    var renderLogout = () => {
      if (id > 1) {
        return (<li><a className="sub-menu out"><img onClick={this.clickLogout} img src="../img/ic_logout.png"></img></a></li>)
      }
    }

    return (
      <div id="main-menu-container">
        <img id="logo" className="logo" src="../img/logo_aia.png"/>
        <ul id="desktop-menu" className="menu align-right show-for-large" data-smooth-scroll data-animation-easing="swing" data-threshold="0">
          <li><a id="d-content" href="#body-content" data-smooth-scroll data-animation-easing="swing" data-threshold="0">#W<span className="text-small">hats</span>Y<span className="text-small">our</span>W<span className="text-small">hy</span></a></li>
          <li><a href="#main-form">ร่วมกิจกรรม</a></li>
          <li><a href="#reward">รางวัล</a></li>
          <li><a href="#live-wall">ดู Live Wall</a></li>
          <li><a className="mail" onClick={this.clickLogout} target="_blank" href="http://www.aia.com/en/about-aia/contact-us.html" ><img src="../img/mail.png"/></a></li>
          {renderLogout()}
        </ul>
        <ul id="phone-menu" className="menu align-right hide-for-large dropdown" data-dropdown-menu>
          <li>
            <a href="#" className="img-logo out">
              <img src="../img/ic_menu.png"/>
            </a>
            <ul id="phone-menu-list" className="menu" data-smooth-scroll data-animation-easing="swing" data-threshold="0">
                <li><a id="m-content" className="sub-menu" href="#body-content" data-smooth-scroll data-animation-easing="swing" data-threshold="0">#W<span className="text-small">hats</span>Y<span className="text-small">our</span>W<span className="text-small">hy</span></a></li>
                <li><a className="sub-menu" href="#main-form">ร่วมกิจกรรม</a></li>
                <li><a className="sub-menu" href="#reward">รางวัล</a></li>
                <li><a className="sub-menu" href="#live-wall">ดู Live Wall</a></li>
                <li><a className="sub-menu mail" target="_blank" href="http://www.aia.com/en/about-aia/contact-us.html" ><img src="../img/mail.png"/></a></li>
                {renderLogout()}
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

    if (location.href.indexOf('logut=true') > 0) {
      var path = "";
      if (location.href.indexOf('whatsyourwhy') > 0) {
        path = "/whatsyourwhy";
      }
      location.href = location.origin + path;
    }

    $('#logo').click(function() {
      var p = "";
      if (location.href.indexOf('whatsyourwhy') > 0) {
        p= "/whatsyourwhy";
      }
      location.href = location.origin + p;
    });

    if (this.props.home == true) {
      var elem = new Foundation.SmoothScroll($('#desktop-menu'), null);
      var elem = new Foundation.SmoothScroll($('#phone-menu-list'), null);
      var elem = new Foundation.SmoothScroll($('#main-menu-container'), null);
    } else {
      var elem = new Foundation.SmoothScroll($('#d-content'), null);
      var elem = new Foundation.SmoothScroll($('#m-content'), null);
    }

    var elem = new Foundation.DropdownMenu($('#phone-menu'), null);


    $('.mail').click(function() {
      window.open("http://www.aia.com/en/about-aia/contact-us.html");
    });

    var that = this;
    $('.out').click(function() {
      document.cookie = 'userId=' + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      var connect = "?";
      if (location.origin.indexOf('?') >= 0) {
        connect = "&"
      }
      location.href = location.origin + connect + "logout=true";
    });

  }
});

module.exports = TopBar;
