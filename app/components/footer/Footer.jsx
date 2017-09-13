var React = require('react');
var {Link, IndexLink} = require('react-router');
var Policy = require('Policy');

var Footer = React.createClass({
  render: function() {
    return (
      <div id="footer">
	      <div class="container">
          <div class="box__social">
            <a href="https://www.facebook.com/ThailandAIA" target="_blank"><img src="../img/facebook-2nd.png" /></a>
            <a href="https://www.youtube.com/user/ThailandAIA" target="_blank"><img src="../img/youtube-2nd.png" /></a>
            <a href="https://line.me/ti/p/%40aiathailand" target="_blank"><img src="../img/line-2nd.png" /></a>
          </div>
          <p class="copyright">สงวนลิขสิทธิ์ © 2560, กลุ่มบริษัทเอไอเอ และบริษัทในเครือ ขอสงวนสิทธิ์ทั้งหมดตามกฎหมาย</p>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
