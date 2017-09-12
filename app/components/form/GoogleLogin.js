var React = require('react');

var GoogleLogin = React.createClass({
  getInitialState: function() {
    return {
      disabled: true
    };
  },

  componentDidMount: function() {
    const { socialId, scope } = this.props;
    ((d, s, id, callback) => {
      let js, gs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://apis.google.com/js/platform.js';
      gs.parentNode.insertBefore(js, gs);
      js.onload = callback;
    })(document, 'script', 'google-platform', () => {
      gapi.load('auth2', () => {
        this.setState({
          disabled: false
        });
        if (!gapi.auth2.getAuthInstance()) {
          gapi.auth2.init({
            client_id: socialId,
            fetch_basic_profile: true,
            scope: scope
          });
        }
      });
    });
  },

  checkLoginState: function(response) {
    if (auth2.isSignedIn.get()) {
      const profile = auth2.currentUser.get().getBasicProfile();
    } else {
      if(this.props.responseHandler) {
        this.props.responseHandler({status: response.status});
      }
    }
  },

  clickHandler: function(e) {
    e.preventDefault();
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => this.props.responseHandler(googleUser));
  },

  render: function() {
    const {
      socialId, scope, responseHandler,
      children, buttonText, ...props
    } = this.props;

    props.disabled = this.state.disabled || props.disabled;

    return (
      <a href="#" className="button-google" {...props}  onClick={this.clickHandler}>Connect with Google+</a>
    )
  }
});

module.exports = GoogleLogin;
