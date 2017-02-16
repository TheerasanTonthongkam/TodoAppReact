var React = require('react');


var Main = (props) => {
  return (
    <div>
        <div>
          <div>
            <p>main go here</p>
            {props.children}
          </div>
        </div>
    </div>
  )
};

module.exports = Main;
