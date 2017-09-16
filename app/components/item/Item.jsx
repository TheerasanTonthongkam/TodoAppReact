var React = require('react');
var {Link, IndexLink} = require('react-router');

var Item = React.createClass({
    render: function() {
      var {id,
          title,
          description,
          imagePath} = this.props;

          var divStyle = {
              backgroundImage: 'url(' + imagePath + ')',
              backgroundSize: 'cover',
              backgroundPosition: '50%'
          };

          var link = `/blog/${id}`

        return (
          <div className="small-12 large-4 cell">
            <Link to={link}>
              <div className="card">
                <div className="wrapper">
                  <div style={divStyle} className="banner"></div>
                  <div className="spacing"></div>
                  {title}<br/>
                  {description}
                </div>
              </div>
            </Link>
          </div>
        );
    }
});

module.exports = Item;
