var React = require('react');
var Nav = require('Nav');
var TopBar = require('TopBar');

var Main = React.createClass({
  render: function () {
    return (
      <TopBar/>
      // <div className="off-canvas-wrapper">
      //   <div className="off-canvas position-right reveal-for-large" id="offCanvas" data-off-canvas>
      //     <Nav/>
      //   </div>
      //   <div className="off-canvas-content content-wrapper" >
      //     <Topbar/>
      //     {this.props.children}
      //   </div>
      // </div>
    );
  },
  componentDidMount: function () {
    //var elem = new Foundation.OffCanvas($('#offCanvas'), false);
  }
});

module.exports = Main;
