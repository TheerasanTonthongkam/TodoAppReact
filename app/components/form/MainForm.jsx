var React = require('react');
var FormWrapper = require('FormWrapper');

var MainForm = React.createClass({
  render: function() {
    return (
        <div id="main-form">
          <h2>แชร์เหตุผลที่ทำให้คุณเริ่มต้นเปลี่ยนแปลงตัวเอง</h2>
          <p>ลุ้นรับหมวกพร้อมลายเซ็นจาก David Beckham<br/> Samsung Galaxy Note 8 และรางวัลอีกมากมาย รวมมูลค่ากว่า 500,000 บาท</p>
          <FormWrapper />
        </div>
    );
  }
});

module.exports = MainForm;
