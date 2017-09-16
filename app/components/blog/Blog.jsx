var React = require('react');
var Item = require('Item');
var services = require('Services');
var Loading = require('Loading');
var {Link, IndexLink} = require('react-router');

var Blog = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      data: []
    };
  },
  getDefaultProps: function() {
    return {
      isLoading: true,
      data: []
    };
  },
  getList: function() {
    var that = this;
    services.getBlog().then(function (data) {
      that.setState({
        data: data,
        isLoading: false
      });
    });
  },
  render: function() {
      var {isLoading, data} = this.state;
      var {home} = this.props;

      var style = {};

      if (home !== true) {
        style = {
          textAlign : 'center'
        };
      }

      if (home) {
        data = data.slice(0,3);
      }

      var renderButton = () => {
        if (home === true) {
          return (<Link to="/blog" className="button-line" maintainScrollPosition={true}>ดูบทความทั้งหมด</Link>)
        }
      }

      if (isLoading) {
        return (
          <div id="blog">
              <h2 style={style}>ทำ "อย่างไร" ให้สุขภาพดี</h2>
                <div className="grid-x grid-margin-x">
                  <Loading />
                </div>
          </div>
        )
      } else {
        var renderList = () => {
          return data.map((blog) => {
            return <Item key={blog.id} {...blog}/>
          });
        };

        return (
          <div id="blog">
              <h2 style={style}>ทำ "อย่างไร" ให้สุขภาพดี</h2>
                <div className="grid-x grid-margin-x">
                  {renderList()}
                </div>
                {renderButton()}
          </div>
        )
      }


  },
  componentDidMount: function() {
    {this.getList()}
  }
});

module.exports = Blog;
