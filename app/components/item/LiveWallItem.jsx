var React = require('react');
var LiveWallItem = React.createClass({
    render: function() {
      var {css, reasonCode, reasonPhrase, imagePath} = this.props;

      var divStyle = {
          backgroundImage: 'url(' + imagePath + ')',
          backgroundSize: 'cover',
          backgroundPosition: '50%'
      };

        return (
          <div className={'live-wall-card ' + css}>
            <div className="text">
                <div className="reason">{reasonCode}</div>
                <div className="why">{reasonPhrase}</div>
            </div>
            <div className="img" style={divStyle}>
            </div>
            <div className="text">
              <img src="../img/WhayYourWhy-Logo.png"/>
            </div>
          </div>
        );
    }
});

module.exports = LiveWallItem;
