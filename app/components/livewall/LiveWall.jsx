var React = require('react');
var LiveWallItem = require('LiveWallItem');
var services = require('Services');
var Loading = require('Loading');

var LiveWall = React.createClass({
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
  getLiveWall: function() {
    var that = this;
    services.getLiveWall().then(function (data) {
      console.log(data);
      that.setState({
        data: data,
        isLoading: false
      });
    });
  },
  render: function() {
    var {isLoading, data} = this.state;

    var firstElemStyle;

    if (data.length > 5 && data.length <= 10) {
      firstElemStyle = 'gone_3'
    }

    if (data.length <= 5) {
      firstElemStyle = 'gone_2'
    }

    if (isLoading) {
      return (
        <div id="live-wall">
          <h2>LIVE WALL</h2>
          <Loading/>
          <a href="#" className="button-line">ดู LIVE WALL ทั้งหมด</a>
        </div>
      )
    } else {

      var renderItemBig = (num) => {
        if (data[num] !== undefined) {
          return (<LiveWallItem css="big" {...data[num]}/>);
        }
      };

      var renderItemC6 = (num) => {
        console.log(num);
        console.log(data[num]);
        if (data[num] !== undefined) {
          return (
            <div className="small-6 cell">
              <LiveWallItem {...data[num]}/>
            </div>
          );
        }
      };

      var renderItemC3_12 = (num) => {
        console.log(num);
        console.log(data[num]);
        if (data[num] !== undefined) {
          return (
            <div className="small-3 large-12 cell">
              <LiveWallItem {...data[num]}/>
            </div>
          );
        }
      };

      return (
          <div id="live-wall">
            <h2>LIVE WALL</h2>
            <div className="wrapper">
              <div className={'w-40 ' + firstElemStyle}>

                 {renderItemBig(0)}

                <div className="grid-x">
                  {renderItemC6(1)}

                  {renderItemC6(2)}

                  {renderItemC6(3)}

                  {renderItemC6(4)}

                </div>
              </div>
              <div className="w-40">
                <div className="grid-x">
                  {renderItemC6(5)}

                  {renderItemC6(6)}

                  {renderItemC6(7)}

                  {renderItemC6(8)}
                </div>

                {renderItemBig(9)}
              </div>
              <div className="w-20">
                <div className="grid-x">
                  {renderItemC3_12(10)}

                  {renderItemC3_12(11)}

                  {renderItemC3_12(12)}

                  {renderItemC3_12(13)}
                </div>
              </div>
              <div className="break"></div>
              <a href="#" className="button-line">ดู LIVE WALL ทั้งหมด</a>
            </div>
          </div>
      );
    }
  },
  componentDidMount: function() {
    {this.getLiveWall()}
  }
});

module.exports = LiveWall;
