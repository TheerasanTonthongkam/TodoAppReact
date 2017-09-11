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
  getCount: function() {
    var that = this;
    services.getLiveWallCount().then(function (c) {
      that.setState({
        count: c,
        isLoading: false
      });
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
