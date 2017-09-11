var React = require('react');

var LoginForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var phone = this.refs.phone.value;
        var email = this.refs.email.value;

        console.log(`${phone} ${email}`);
    },
    render: function() {
        return (
            <div id="login-form">
              <h3>ล้อคอิน</h3>

              <div className="note">หากคุณยังไม่ได้ลงทะเบียน สามารถลงทะเบียนผ่าน facebook or google ได้ที่ปุ่มด้านล่าง</div>
              <div className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <a href="#" className="button-facebook">Connect with Facebook</a>
                </div>
                <div className="small-6 cell">
                  <a href="#" className="button-google">Connect with Google+</a>
                </div>
              </div>

              <form onSubmit={this.onFormSubmit}>
                <label>เบอร์โทรศัพท์</label>
                <input type="text" ref="phone"/>
                <label>อีเมล์</label>
                <input type="email" ref="email"/>
                <button type="submit" className="button-line expanded">ล้อคอิน</button>
              </form>
            </div>
        );
    }
});

module.exports = LoginForm;
