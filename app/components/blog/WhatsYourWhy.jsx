var React = require('react');
var Item = require('Item');
var services = require('Services');
var Loading = require('Loading');
var {Link, IndexLink} = require('react-router');
var striptags = require('striptags');

var WhatsYourWhy = React.createClass({
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
    services.getFamousBlog().then(function (data) {
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
      var firstBlog = {};


      if (home !== true) {
        style = {
          textAlign : 'center'
        };
      }

      if (home) {
        data = data.slice(0,3);
      } else {
        firstBlog = data[0];
        data = data.slice(1);
      }

      var renderButton = () => {
        if (home === true) {
          return (<Link to="/blog" className="button-line" maintainScrollPosition={true}>ดูบทความทั้งหมด</Link>)
        }
      }

      var renderFirstBlog = () => {
        if (home !== true) {
          var divStyle = {
              backgroundImage: 'url(' + firstBlog.imagePath + ')',
              backgroundSize: 'cover',
              backgroundPosition: '50%',
              height: '245px'
          };
          var firstDes = "";
          firstDes = striptags(firstBlog.description);

          return (
            <Link to={`/blog/${firstBlog.id}`}>
              <div className="grid-x grid-margin-x">
                  <div className="small-12 large-6 large-offset-1 cell">
                    <div style={divStyle} className="banner"></div>
                  </div>
                  <div className="small-12 large-5 cell">
                    <h4>
                      {firstBlog.title}
                    </h4>
                    <p className="top-des">{firstDes}</p>
                  </div>
              </div>
              <div className="grid-spacing"></div>
            </Link>
          )
        }
      }

      if (isLoading) {
        return (
          <div id="whats-your-why">
              <h2 style={style}>พบกับ #whatsyourwhy ของคนดัง</h2>
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
              <h2 style={style}>พบกับ #whatsyourwhy ของคนดัง</h2>

                {renderFirstBlog()}

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

module.exports = WhatsYourWhy;
