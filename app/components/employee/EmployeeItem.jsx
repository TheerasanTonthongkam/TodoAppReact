var React = require('react');
var {Link, IndexLink} = require('react-router');

var EmployeeItem = React.createClass({
    render: function () {
        var {login,
            firstName,
            lastName,
            mobile,
            jobLevel,
            branch} = this.props;
        var avatarUrl = "/img/avatar/" + login  + "_restaurant.jpg";
        var navigateUrl = "employee/" + login;

        return (
            <tr>
                <td width="60">
                    <img className="avatar" src={avatarUrl}/>
                </td>
                <td>{login}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{mobile}</td>
                <td>{jobLevel}</td>
                <td>{branch}</td>
                <td>true</td>
                <td>
                    <Link to={navigateUrl}>
                        <span className="icon-erm-icon-09-edit"/>
                    </Link>
                </td>
            </tr>
        );
    }
});

module.exports = EmployeeItem;