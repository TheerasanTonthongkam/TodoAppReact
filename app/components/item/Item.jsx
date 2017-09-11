var React = require('react');
var Item = React.createClass({
    render: function() {
      var {title,
          description,
          imagePath} = this.props;

          var divStyle = {
              backgroundImage: 'url(' + imagePath + ')',
              backgroundSize: 'cover',
              backgroundPosition: '50%'
          };

        return (
          <div className="small-12 large-4 cell">
            <div className="card">
              <div className="wrapper">
                <div style={divStyle} className="banner"></div>
                <div className="spacing"></div>
                {title}<br/>
                {description}
              </div>
            </div>
          </div>
        );
    }
});

module.exports = Item;
