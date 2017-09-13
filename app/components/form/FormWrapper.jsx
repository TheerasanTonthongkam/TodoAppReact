var React = require('react');
var LoginForm = require('LoginForm');
var RegisterForm = require('RegisterForm');
var AddReasonForm = require('AddReasonForm');

var FormWrapper = React.createClass({
  getInitialState: function() {
    var that = this;
    var id = -1;
    if (that.getCookie("userId") !== undefined) {
      id = that.getCookie("userId");
    }
    return {
      login: (that.getCookie("userId") !== undefined),
      id: id
    };
  },
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
  onGetUser: function(data) {
    document.cookie = `userId=${data.id}`;
    this.setState({
      login: true,
      id: data.id
    });
  },
  render: function() {
    var {login, id} = this.state;
    console.log(login);
    console.log(id);
    if (login && id > 0) {
      return (
        <div>
          <AddReasonForm userId={id} />
        </div>
      );
    } else {
      return (
        <div className="form-container grid-x margin-x">
          <div className="small-12 large-5 small-order-1  large-order-3 cell">
            <RegisterForm onGetUser={this.onGetUser}/>
          </div>
          <div className="small-12 large-3 small-order-2 cell">
            <div className="red-line">
              <div className="or">หรือ</div>
            </div>
          </div>
          <div className="small-12 large-3 large-offset-1 small-order-3 large-order-1 cell">
              <LoginForm onGetUser={this.onGetUser}/>
          </div>
        </div>
      );
    }
  }
});

module.exports = FormWrapper;
