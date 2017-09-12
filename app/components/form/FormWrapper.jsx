var React = require('react');
var LoginForm = require('LoginForm');
var RegisterForm = require('RegisterForm');
var AddReasonForm = require('AddReasonForm');

var FormWrapper = React.createClass({
  getInitialState: function() {
    return {
      login: false,
      user: undefined
    };
  },
  onGetUser: function(data) {
    alert(data);
    this.setState({
      login: true,
      user: data
    });
  },
  render: function() {
    var {login, user} = this.state;

    if (!(login && user != undefined)) {
      return (<AddReasonForm {...user} />);
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
