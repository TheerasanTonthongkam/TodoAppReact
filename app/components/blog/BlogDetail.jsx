var React = require('react');
var Item = require('Item');
var services = require('Services');
var Loading = require('Loading');
var WhatsYourWhy = require('WhatsYourWhy');
var Blog = require('Blog');

var BlogDetail = React.createClass({
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
    return (
      <div id="blog">
          <h2>Detail</h2>


            <div className="red-line"></div>
            <WhatsYourWhy home={true}/>
            <Blog home={true}/>
      </div>
    )

  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  componentWillUnmount: function() {
    window.scrollTo(0, 0);
  }
});

module.exports = BlogDetail;
