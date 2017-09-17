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

              <h3 className="package">สนใจซื้อ แพ็คเกจ ดูแลสุขภาพรอบด้าน กรุณากรอกข้อมูล</h3>
              <div className="frame-from">
                <iframe src="https://direct.aia.co.th/btoc/Product/LeadForm/iframe.jsp?productID=29" frameBorder="0"></iframe>
              </div>

              <div className="red-line"></div>
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
    if (this.props.params.id > 0) {
      this.getBlogFromId(this.props.params.id);
    }

  }
});

module.exports = BlogDetail;
