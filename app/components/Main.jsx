var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas position-left reveal-for-large" id="offCanvas" data-off-canvas>
          <Nav/>
        </div>
        <div className="off-canvas-content content-wrapper" >
          {this.props.children}
        </div>
      </div>
    );
  },
  componentDidMount: function () {
    var elem = new Foundation.OffCanvas($('#offCanvas'), false);
  }
});

module.exports = Main;
