var React = require('react');
var LiveWallGrid = require('LiveWallGrid');
var {Link, IndexLink} = require('react-router');
var services = require('Services');
var Loading = require('Loading');
var InfiniteScroll = require('react-infinite-scroll');

var Pagination = React.createClass({
  getInitialState: function() {
    return {
      page: 1,
      count: 0,
      isLoading: true
    };
  },
  getDefaultProps: function() {
    return {
      page: 1,
      count: 0,
      isLoading: true
    };
  },
  getCount: function() {
    var that = this;
    services.getLiveWallCount().then(function (c) {
      that.setState({
        count: c,
        isLoading: false
      });
    });
  },
  onClickNext: function(e) {
    e.preventDefault();
    var {page} = this.state;
    page = page + 1;
    this.props.onPageChange(page);
    this.setState({
      page: page
    });
  },
  onClickBack: function(e) {
    e.preventDefault();
    var {page} = this.state;
    page = page - 1;
    this.props.onPageChange(page);
    this.setState({
      page: page
    });
  },
  onClickPage: function(e) {
    e.preventDefault();
    this.props.onPageChange(e.target.text);
    this.setState({
      page: e.target.text
    });
  },
  shouldComponentUpdate: function(state) {
    console.log("shouldComponentUpdate");
    console.log(state);
    return true;
  },
  render: function() {
    var {isLoading, count, page} = this.state;

    if (isLoading) {
      return (
        <ul className="pagination text-center" role="navigation" aria-label="Pagination">
          <Loading/>
        </ul>
      );
    } else {
      var numbers = [];
      for (var i = 0; i < Math.round(count/14); i++) {
        numbers.push( {
          id: i,
          val: (i+1)
        });
      }

      var renderNumber = () => {
          return numbers.map((n) => {
            console.log(this.state.page + " " + this.props.page + " " + n.val)
            if (n.val == this.state.page) {
              return (
                <li key={n.id} className="current">{n.val}</li>
              )
            } else {
              return (
                    <li><a key={n.id} href="#" onClick={this.onClickPage}>{n.val}</a></li>
                );
            }
          });
      };

      var prevStyle = "";
      var nextStyle = "";
      if (this.state.page == 1) {
        prevStyle = 'disabled'
      }

      if (this.state.page == Math.round(count/14)) {
        nextStyle = 'disabled'
      }

      return (
        <ul className="pagination text-center" role="navigation" aria-label="Pagination">

          <li className={`pagination-previous `}><a onClick={this.onClickBack} className={prevStyle} href="#" aria-label="Previous page">Previous</a></li>
          {renderNumber()}
          <li className={`pagination-next `}><a onClick={this.onClickNext} className={nextStyle} href="#" aria-label="Next page">Next</a></li>
        </ul>
      )
    }
  },
  componentDidMount: function() {
    {this.getCount()}
  }
});

module.exports = Pagination;
