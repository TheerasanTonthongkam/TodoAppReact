var React = require('react');

var Video = React.createClass({
    render: function() {
        return (
            <div id="video">
              <div className="responsive-embed widescreen">
                <iframe id="video-frame" width="560" height="315" src="https://www.youtube.com/embed/VCg8udKHxLY" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
        );
    }
});

module.exports = Video;
