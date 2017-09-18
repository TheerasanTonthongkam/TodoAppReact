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
        var url = location.href.replace(location.hash, '');
        var connect = "?";
        if (url.indexOf('?') >= 0) {
          connect = "&"
        }

        location.href = url + connect + "register=true";
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
                  <input type="text" name="phone" maxLength="10" ref="phone" placeholder="0XXXXXXXXX" pattern="^\d{10}$" required/>
                </div>
                <div className="small-6 cell">
                  <label>อีเมล</label>
                  <input type="email" ref="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
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
  },
  componentDidMount: function(){
      $('input[name=phone]').keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      });
  }
});

module.exports = RegisterForm;
