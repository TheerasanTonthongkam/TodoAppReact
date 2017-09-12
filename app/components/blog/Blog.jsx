var React = require('react');
var Item = require('Item');
var services = require('Services');
var Loading = require('Loading');

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

      if (isLoading) {
        return (
          <div id="blog">
              <h2>ทำ "อย่างไร" ให้สุขภาพดี</h2>
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
              <h2>ทำ "อย่างไร" ให้สุขภาพดี</h2>
                <div className="grid-x grid-margin-x">
                  {renderList()}
                </div>
          </div>
        )
      }


  },
  componentDidMount: function() {
    {this.getList()}
  }
});

module.exports = Blog;
