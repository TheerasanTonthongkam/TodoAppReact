var React = require('react');
var {Link, IndexLink} = require('react-router');

var Policy = React.createClass({
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
        <div id="box__policy">
            <div className="container">
                <p>
                    <a href={"http://www.aia.co.th/th/about-aia/terms-of-use.html?"+params} target="_blank">ข้อตกลงการใช้</a>
                    <span>|</span>
                    <a href={"http://www.aia.co.th/th/about-aia/privacy-statement.html?"+params} target="_blank">การดูแลรักษาข้อมูลส่วนบุคคล</a>
                </p>
                <p>คำเตือน: ผู้ซื้อควรทำความเข้าใจในรายละเอียดความคุ้มครองและเงื่อนไขก่อนตัดสินใจทำประกันภัยทุกครั้ง</p>
            </div>
        </div>
        );
    }
});

module.exports = Policy;
