var React = require('react');
var services = require('Services');
var Loading = require('Loading');

var RunninngNumber = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      count: 0
    };
  },
  getDefaultProps: function() {
    return {
      isLoading: true,
      count: 0
    };
  },
  showRuning: function(start, stop) {
    var that = this;
    this.setState({
      count: start,
      isLoading: false
    });

    if (start < stop) {
      start = start + 1;
      setTimeout(function() {
        {that.showRuning(start, stop)}
      }, 3000);
    }
  },
  getCount: function() {
    var that = this;
    services.getLiveWallCount().then(function (c) {
      var start = 0;
      if (c > 10) {
        start = c - 10;
      }
      {that.showRuning(start, c)}
    });
  },
  render: function () {
      var {isLoading, count} = this.state;

      if (isLoading) {
          return (
              <div id="runing-number">
                <span>
                  <Loading/>
                </span>
              </div>
          );
        } else {
          var number = count + "";
          var numbers = [];

          for (var i = 0; i < number.length; i++) {
            numbers.push( {
              id: i,
              val: number[i]
            });
          }

          var renderNumber = () => {
              return numbers.map((n) => {
                  return (
                      <span key={n.id}>{n.val}</span>
                  );
              });
          };

          return (
            <div id="runing-number">
              {renderNumber()}
            </div>
          )
        }
      },
      componentDidMount: function() {
        {this.getCount()}
      }
});

module.exports = RunninngNumber;
