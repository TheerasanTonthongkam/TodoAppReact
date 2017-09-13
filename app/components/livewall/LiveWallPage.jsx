var React = require('react');
var LiveWallGrid = require('LiveWallGrid');
var Pagination = require('Pagination');
var {Link, IndexLink} = require('react-router');
var InfiniteScroll = require('react-infinite-scroll');

var Loading = require('Loading');

var LiveWall = React.createClass({
  getInitialState: function() {
    return {
      page: 1
    }
  },
  onPageChange: function(page) {
    this.setState({
      page: page
    });
  },
  shouldComponentUpdate: function(state) {
    console.log("shouldComponentUpdate Main");
    console.log(state);
    return true;
  },
  render: function() {
    var {page} = this.state;
    console.log(page);
    return (
        <div id="live-wall">
          <h2>LIVE WALL</h2>
          <div className="wrapper">

<LiveWallGrid page={page}/>
            

            <div className="break"></div>
            <Pagination onPageChange={this.onPageChange} />
            <Link to="/" className="button-line">กลับ</Link>
          </div>
        </div>
    );
  }
});

module.exports = LiveWall;
