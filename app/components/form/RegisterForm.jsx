var React = require('react');
var services = require('Services');

var RegisterForm = React.createClass({
  getDefaultProps: function() {
    return {
      id: undefined,
      firstname: undefined,
      lastname: undefined,
      phoneNo: undefined,
      email: undefined,
      provider: undefined,
      lastActive: undefined,
      createOn: undefined
    };
  },
  onFormSubmit: function(e) {
      e.preventDefault();
      var phone = this.refs.phone.value;
      var email = this.refs.email.value;
      var firstName = this.refs.firstName.value;
      var lastName = this.refs.lastName.value;

      var data = {
      	firstName: firstName,
        lastName: lastName,
        phoneNo: phone,
        email: email,
        provider: "email"
      }

      var that = this;

      services.register(data).then(function(data) {
        that.props.onGetUser(data);
      }, function (e) {
        alert('Unable to sign in');
      });

  },
  render: function() {
    return (
        <div id="register-form">
          <h3>ลงทะเบียน</h3>
            <form onSubmit={this.onFormSubmit}>

              <label>ชื่อ</label>
              <input type="text" ref="firstName" required/>

              <label>สกุล</label>
              <input type="text" ref="lastName" required/>

              <div className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <label>เบอร์โทรศัพท์มือถือ</label>
                  <input type="text" ref="phone" placeholder="0XXXXXXXXX" pattern="^\d{10}$" required/>
                </div>
                <div className="small-6 cell">
                  <label>อีเมล</label>
                  <input type="email" ref="email" required/>
                </div>
              </div>

              <div>
                <input className="check" type="checkbox" id="term" defaultChecked></input>
                <label className="term" htmlFor="term">ยินยอมให้ใช้ข้อมูลข้างต้นเพื่อให้เอไอเอติดต่อกลับ</label>
              </div>

                <div>
                  <input className="check" type="checkbox" id="contact" defaultChecked></input>
                  <label className="term" htmlFor="contact">สนใจเข้าร่วมโครงการสุขภาพดีกับเอไอเอไวทัลลิตี้</label>
                </div>





              <button type="submit" className="button-line expanded">ลงทะเบียน</button>
            </form>
        </div>
    );
  }
});

module.exports = RegisterForm;
