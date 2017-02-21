var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <img className="main-logo" src="../img/logo_ampos.png"/>
        <ul className="menu">
          <li>
            <Link to="/employee" activeClassName="active">
              <span className="icon-erm-icon-03-employee"/>
              Employee
              <span className="right icon-erm-icon-16-arrowright"/>
            </Link>
          </li>
          <li>
            <Link to="/communication" activeClassName="active">
              <span className="icon-erm-icon-55-message"/>
              Communication module
              <span className="right icon-erm-icon-16-arrowright"/>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Nav;
