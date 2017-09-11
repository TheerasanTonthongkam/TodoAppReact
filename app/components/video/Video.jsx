var React = require('react');

var Video = React.createClass({
    render: function() {
        return (
            <div id="video">
              <div className="responsive-embed">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/totIVAi9BUc" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
        );
    }
});

module.exports = Video;
