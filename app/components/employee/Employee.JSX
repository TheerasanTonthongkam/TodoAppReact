var React = require('react');
var EmployeeList = require('EmployeeList');
var employeeService = require('employeeService')

var Employee = React.createClass({

    getInitialState: function () {
        return employeeService.getEmployees();
    },
    render: function() {
        var {employees} = this.state;

        return (
            <div>
                <h3>Employees</h3>
                <EmployeeList employees={employees}/>
            </div>
        );
    }
});

module.exports = Employee;
