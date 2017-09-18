var React = require('react');
var services = require('Services');
var GoogleLogin = require('GoogleLogin');

var LoginForm = React.createClass({
  onGoogleLogin: function(googleUser) {
    console.log(googleUser);
      var profile = googleUser.getBasicProfile();
      var data = {
        firstName: profile.getGivenName(),
        lastName: profile.getFamilyName(),
        email: profile.getEmail(),
        provider: "google"
      }
      this.doRegister(data);
    },
    onFacebookLogin: function(e) {
      e.preventDefault();
      var that = this;
      FB.login(function(response) {
        that.getFacebookUserData();
      }, {scope: 'public_profile,email'});
    },
    getFacebookUserData: function() {
      var that = this;
      FB.api('/me', {fields: 'last_name,first_name,email'}, function(response) {
          that.registerWithFacebook(response);
      });
    },
    registerWithFacebook: function(response) {
      var data = {
        firstName: response.first_name,
        lastName: response.last_name,
        email: response.email,
        provider: "facebook"
      }
      this.doRegister(data);
    },
    doRegister: function(data) {
      var that = this;
      services.register(data).then(function(data) {
        that.props.onGetUser(data);

        var url = location.href.replace(location.hash, '');
        var connect = "?";
        if (url.indexOf('?') >= 0) {
          connect = "&"
        }

        location.href = url + connect + "login=true";

      }, function (e) {
        alert('Unable to sign in');
      });
    },
    onFormSubmit: function(e) {
        e.preventDefault();
        var phone = this.refs.phone.value;
        var email = this.refs.email.value;

        var data = {
          phoneNo: phone,
          email: email
        }

        var that = this;
        services.login(data).then(function(data) {
          console.log("Registered");
          that.props.onGetUser(data);
          var url = location.href.replace(location.hash, '');
          var connect = "?";
          if (url.indexOf('?') >= 0) {
            connect = "&"
          }

          location.href = url + connect + "login=true";
        }, function (e) {
          alert('Unable to sign in');
        });
    },
    render: function() {
        return (
            <div id="login-form">
              <h3>ล็อกอิน</h3>

              <div className="note">หากคุณยังไม่ได้ลงทะเบียน สามารถลงทะเบียนผ่าน Facebook หรือ Google ได้ที่ปุ่มด้านล่าง</div>

              <div style={{marginTop: '10px'}} className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <a href="#" className="button-facebook" onClick={this.onFacebookLogin}>Connect with Facebook</a>
                </div>
                <div className="small-6 cell">
                    <GoogleLogin socialId="968878333648-agv6p2deqjp7umlop1i6gp6e0tvs67v8.apps.googleusercontent.com"
                       className="button-google"
                       scope="profile"
                       responseHandler={this.onGoogleLogin}
                       buttonText="Connect with Google+"/>
                </div>
              </div>

              <form style={{marginTop: '10px'}} onSubmit={this.onFormSubmit}>
                <label>เบอร์โทรศัพท์มือถือ</label>
                <input type="text" name="phone" ref="phone" maxLength="10" required placeholder="0XXXXXXXXX" pattern="^\d{10}$" />
                <label>อีเมล</label>
                <input type="email" ref="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                <button type="submit" className="button-line expanded">ล็อกอิน</button>
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

module.exports = LoginForm;
