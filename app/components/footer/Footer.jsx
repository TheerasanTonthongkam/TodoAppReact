var React = require('react');
var {Link, IndexLink} = require('react-router');
var Policy = require('Policy');

var Footer = React.createClass({
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
  render: function() {

    var id = this.getCookie('userId');
    var params = "";

    if (id > 0) {
      params = "userId="+id;
    }

    return (
      <div id="footer">
	      <div className="container">
          <div className="box__social">
            <a href={"https://www.facebook.com/ThailandAIA?"+params} target="_blank"><img src="../img/facebook-2nd.png" /></a>
            <a href={"https://www.youtube.com/user/ThailandAIA?"+params} target="_blank"><img src="../img/youtube-2nd.png" /></a>
            <a href={"https://line.me/ti/p/%40aiathailand?"+params} target="_blank"><img src="../img/line-2nd.png" /></a>
          </div>
          <p className="copyright">สงวนลิขสิทธิ์ © 2560, กลุ่มบริษัทเอไอเอ และบริษัทในเครือ ขอสงวนสิทธิ์ทั้งหมดตามกฎหมาย</p>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
