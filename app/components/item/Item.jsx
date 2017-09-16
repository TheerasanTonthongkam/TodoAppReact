var React = require('react');
var {Link, IndexLink} = require('react-router');
var striptags = require('striptags');

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

          description = striptags(description);

          var link = `/blog/${id}`

        return (
          <div className="small-12 large-4 cell">
            <Link to={link}>
              <div className="card">
                <div className="wrapper">
                  <div style={divStyle} className="banner"></div>
                  <div className="spacing"></div>
                  <p>{title}</p>
                  <p>{description}</p>
                </div>
              </div>
            </Link>
          </div>
        );
    },
    componentDidMount: function() {
      var {id,
          description} = this.props;
          var elem = $(`#content-${id}`);

          elem.innerHTML = description;
          elem.text( elem.textContent || elem.innerText || "");
    }
});

module.exports = Item;
