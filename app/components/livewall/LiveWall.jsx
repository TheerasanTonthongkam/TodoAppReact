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
        } else {
          return (<span>empty</span>);
        }
      };

      return (
          <div id="live-wall">
            <h2>LIVE WALL</h2>
            <div className="wrapper">
              <div className="w-40">

                 {renderItemBig(0)}

                <div className="grid-x">
                  {renderItemC6(0)}

                  {renderItemC6(1)}

                  <div className="small-6 cell">
                    <LiveWallItem/>
                  </div>

                  <div className="small-6 cell">
                    <LiveWallItem/>
                  </div>

                </div>
              </div>
              <div className="w-40">
                <div className="grid-x">
                  {renderItemC6(1)}

                  {renderItemC6(2)}

                  {renderItemC6(3)}

                  {renderItemC6(4)}
                </div>

                <LiveWallItem css="big"/>
              </div>
              <div className="w-20">
                <div className="grid-x">
                  <div className="small-3 large-12 cell">
                    <LiveWallItem/>
                  </div>

                  <div className="small-3 large-12 cell">
                    <LiveWallItem/>
                  </div>

                  <div className="small-3 large-12 cell">
                    <LiveWallItem/>
                  </div>

                  <div className="small-3 large-12 cell">
                    <LiveWallItem/>
                  </div>
                </div>
              </div>
              <div className="break"></div>
            </div>
            <a href="#" className="button-line">ดู LIVE WALL ทั้งหมด</a>
          </div>
      );
    }
  },
  componentDidMount: function() {
    {this.getLiveWall()}
  }
});

module.exports = LiveWall;
