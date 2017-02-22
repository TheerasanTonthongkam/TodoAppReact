var React = require('react');
var EmployeeItem = require('EmployeeItem');

var EmployeeList = React.createClass({

    render: function () {
        var {employees} = this.props;

        var renderEmployees = () => {
            return employees.map((employee) => {
                return (
                    <EmployeeItem key={employee.id} {...employee}/>
                );
            });
        };

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                        <th>Job Level</th>
                        <th>Branch</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {renderEmployees()}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = EmployeeList;