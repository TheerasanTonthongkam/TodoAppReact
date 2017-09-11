var React = require('react');
var services = require('Services');

var RegisterForm = React.createClass({
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

      services.registerWithEmail(data).then(function(data) {
        console.log("Registered");
        console.log(data);
      });

      console.log(`${phone} ${email} ${firstName} ${lastName}`);
  },
  render: function() {
    return (
        <div id="register-form">
          <h3>ลงทะเบียน</h3>
            <form onSubmit={this.onFormSubmit}>

              <label>ชื่อ</label>
              <input type="text" ref="firstName"/>

              <label>สกุล</label>
              <input type="text" ref="lastName"/>

              <div className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <label>เบอร์โทรศัพท์</label>
                  <input type="text" ref="phone"/>
                </div>
                <div className="small-6 cell">
                  <label>อีเมล์</label>
                  <input type="email" ref="email"/>
                </div>
              </div>

                <input className="check" type="checkbox" id="term" ref="term"></input>
                <label className="term" htmlFor="term">ยินยอมให้ใช้ข้อมูลข้างต้นเพื่อรับรายละเอียดเกี่ยวกับผลิตภัณฑ์</label>

              <button type="submit" className="button-line expanded">ลงทะเบียน</button>
            </form>
        </div>
    );
  }
});

module.exports = RegisterForm;
