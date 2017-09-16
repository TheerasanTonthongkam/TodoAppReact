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
      data: [],
      id: ''
    };
  },
  getBlogFromId: function(id) {
    var that = this;
    services.getBlogFromId(id).then(function (data) {
      that.setState({
        data: data,
        isLoading: false
      });

      $('#content').html(data.description);
      window.scrollTo(0,0);
    }, function (e) {
      alert('Unable to Load  ' + e);
      that.setState({
        isLoading: false
      });
    });
  },
  render: function() {
    var {data, isLoading, imagePath, id} = this.state;
    console.log(id);
    var renderContent = () => {
      if (isLoading) {
        return (<Loading/>)
      } else {
        return (
          <div>
            <div id="content"></div>
            <div id="break" style={{clear:'both'}}></div>
          </div>
        )
      }
    }

    return (
      <div id="blog">
          <img src={data.imagePath}></img>
          <h2 style={{color: '#000'}}>{data.title}</h2>
            {renderContent()}
            <div className="red-line"></div>
            <WhatsYourWhy home={true}/>
            <Blog home={true}/>
      </div>
    )

  },
  componentWillReceiveProps: function() {
    var id = location.href.split('#/blog/')[1].split('?')[0];
    if (id > 0) {
      this.getBlogFromId(id);
    }
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
    console.log("did mount" + this.props.params.id);
    if (this.props.params.id > 0) {
      this.getBlogFromId(this.props.params.id);
    }

  }
});

module.exports = BlogDetail;
