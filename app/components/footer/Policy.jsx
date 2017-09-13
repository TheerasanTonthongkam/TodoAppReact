var React = require('react');
var {Link, IndexLink} = require('react-router');

var Policy = React.createClass({
    render: function() {
        return (
        <div id="box__policy">
            <div class="container">
                <p>
                    <a href="http://www.aia.co.th/th/about-aia/terms-of-use.html" target="_blank">ข้อตกลงการใช้</a>
                    <span>|</span>
                    <a href="http://www.aia.co.th/th/about-aia/privacy-statement.html" target="_blank">การดูแลรักษาข้อมูลส่วนบุคคล</a>
                </p>
                <p>คำเตือน: ผู้ซื้อควรทำความเข้าใจในรายละเอียดความคุ้มครองและเงื่อนไขก่อนตัดสินใจทำประกันภัยทุกครั้ง</p>
            </div>
        </div>
        );
    }
});

module.exports = Policy;
