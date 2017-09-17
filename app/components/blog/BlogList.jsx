var React = require('react');
var WhatsYourWhy = require('WhatsYourWhy');
var Blog = require('Blog');

var BlogList = React.createClass({

  render: function() {
    return (
      <div>
        <WhatsYourWhy />
        <div className="red-line"></div>
        <Blog />
        <div className="red-line"></div>
        <h3 className="package">สนใจซื้อ แพ็คเกจ ดูแลสุขภาพรอบด้าน กรุณากรอกข้อมูล</h3>
        <div className="frame-from">
          <iframe src="https://direct.aia.co.th/btoc/Product/LeadForm/iframe.jsp?productID=29" frameBorder="0"></iframe>
        </div>
        <br />
        <br />
      </div>
    );
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
    console.log('ddd');
  },
  componentWillUnmount: function() {
    window.scrollTo(0, 0);
  }
});

module.exports = BlogList;
