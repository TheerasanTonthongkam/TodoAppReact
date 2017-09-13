var React = require('react');
var {Link, IndexLink} = require('react-router');

var Body = React.createClass({
  onClickImage: function(e) {
      e.preventDefault();
      $("#video-frame")[0].src += "?autoplay=1";
  },
  render: function () {
    return (
      <div>
        <a id="img-banner" href="#video" data-smooth-scroll data-animation-easing="swing" data-threshold="0" onClick={this.onClickImage}>
          <img className="banner hide-for-large" src="../img/banner_mobile.png" />
          <img className="banner show-for-large" src="../img/banner_desktop.png"/>
        </a>
      </div>
    );
  },
  componentDidMount: function () {
    var elem = new Foundation.SmoothScroll($('#img-banner'), null);
  }
});

module.exports = Body;
