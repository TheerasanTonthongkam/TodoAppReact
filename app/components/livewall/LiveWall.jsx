var React = require('react');
var LiveWallGrid = require('LiveWallGrid');
var {Link, IndexLink} = require('react-router');

var LiveWall = React.createClass({
  render: function() {
    return (
        <div id="live-wall">
          <h2>LIVE WALL</h2>
          <div className="wrapper">

            <LiveWallGrid page={1}/>

            <div className="break"></div>
            <Link to="/livewall" className="button-line">ดู LIVE WALL ทั้งหมด</Link>
          </div>
        </div>
    );
  }
});

module.exports = LiveWall;
