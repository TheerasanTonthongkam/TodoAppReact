var React = require('react');
var LoginForm = require('LoginForm');
var RegisterForm = require('RegisterForm');

var MainForm = React.createClass({
    render: function() {
        return (
            <div id="main-form">
              <h2>แชร์เหตุผลที่ทำให้คุณเริ่มต้นเปลี่ยนแปลงตัวเอง</h2>
              <p>ลุ้นรับหมวกพร้อมลายเซนต์จาก David Beckham, Samsung Galaxy Note 8 และรางวัลอีกมากมาย รวมมูลค่ากว่า 200,000 บาท</p>

              <div className="form-container grid-x margin-x">
                <div className="small-12 large-6 small-order-1  large-order-3 cell">
                  <RegisterForm />
                </div>
                <div className="small-12 large-1 small-order-2 cell">

                </div>
                <div className="small-12 large-5 small-order-3 large-order-1 cell">
                    <LoginForm />
                </div>
              </div>
            </div>
        );
    }
});

module.exports = MainForm;
