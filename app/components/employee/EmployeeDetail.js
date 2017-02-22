var React = require('react');
var employeeService = require('employeeService')

var EmployeeDetail = React.createClass({
    render: function () {

        var hash = window.location.hash;
        var split = hash.split('/');
        var size = split.length;

        var name = split[size-1].split('?')[0];

        var {login, firstName, lastName, mobile} = employeeService.getEmployeeByLoginName(name);
        

        return (
            <div>
               <h3>Detail</h3>
                {login}
                {mobile}
            </div>
        );
    }
});

module.exports = EmployeeDetail;