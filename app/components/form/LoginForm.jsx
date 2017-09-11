var React = require('react');

var LoginForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var city = this.refs.city.value;

        if (city.length > 0) {
          this.refs.city.value = '';
          this.props.onSetCity(city);
        }
    },
    render: function() {
        return (
            <div id="login-form">
              <h3>ล้อคอิน</h3>

              <div className="grid-x margin-x">
                <div className="small-12 large-6 cell">
                  fb
                </div>
                <div className="small-12 large-6 cell">
                  gg
                </div>
              </div>

              <form onSubmit={this.onFormSubmit}>
                <label>เบอร์โทรศัพท์</label>
                <input type="text" ref="phone"/>
                <label>อีเมล์</label>
                <input type="email" ref="email"/>
              </form>
            </div>
        );
    }
});

module.exports = LoginForm;
