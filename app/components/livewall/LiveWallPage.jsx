var React = require('react');
var LiveWallGrid = require('LiveWallGrid');
var Pagination = require('Pagination');
var {Link, IndexLink} = require('react-router');
var InfiniteScroll = require('react-infinite-scroll');
var services = require('Services');

var Loading = require('Loading');

var LiveWall = React.createClass({
  getInitialState: function() {
    return {
      page: 1,
      scrollHeight: 0,
      count: 0
    }
  },
  getCount: function() {
    var that = this;
    services.getLiveWallCount().then(function (c) {
      that.setState({
        count: Math.round(c/14)
      });

      that.handleScroll();
    });
  },
  onPageChange: function(page) {
    this.setState({
      page: page
    });
  },
  shouldComponentUpdate: function(state) {
    return true;
  },
  handleScroll: function(e) {
    var html = document.documentElement;
    var {page, scrollHeight, count} = this.state;

    if (html.scrollHeight - (document.body.scrollTop + html.clientHeight) < 250 &&
      scrollHeight < html.scrollHeight
    ) {

      if (page < count) {
        page = page + 1;
        this.setState({
          page: page,
          scrollHeight: html.scrollHeight + 400
        });

        console.log("loadMore " + page);
      }

    }

  },
  render: function() {
    var {page} = this.state;

    var tmp = []

    for (var i = 1; i <= (page); i++) {
      tmp.push(i);
    }


    var renderGrid = () => {
      return tmp.map((i) => {
        return (<LiveWallGrid key={i} page={i}/>);
      });
    }

    return (
        <div id="live-wall">
          <h2>LIVE WALL</h2>
          <div className="wrapper">
            {renderGrid()}
            <div className="break"></div>
            <Link to="/" className="button-line">กลับ</Link>
          </div>
        </div>
    );
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
    this.getCount();
},
  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.handleScroll);
  }
});

module.exports = LiveWall;
