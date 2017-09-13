var React = require('react');
var HowTo = require('HowTo');

var Reward = React.createClass({
  onClickHowTo: function(e) {
    e.preventDefault();

    if (this.state.openHowTo) {
      var modal = new Foundation.Reveal($('#how-to-modal'));
      modal.open();
    } else {
      this.setState({
        openHowTo: true
      });
    }
  },
  getInitialState: function() {
  return {
    openHowTo: false
  };
  },
  render: function() {

    var {openHowTo} = this.state;

    function renderHowTo () {
      if (openHowTo) {
        return <HowTo/>;
      }
    }

    return (
      <div id="reward-wrapper">
        {renderHowTo()}
        <div id="reward">
            <h2>ของรางวัล</h2>
              <div className="grid-x">
                <div className="medium-12 large-6 columns">
                  <div className="reward-card big">
                    <img src="../img/hat.png"/>
                    <h3>หมวกพร้อมลายเซนต์จาก David Backham</h3>
                    <div>1 รางวัล</div>
                  </div>
                </div>
                <div className="medium-12 large-6 columns">
                  <div className="grid-x">
                    <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize2.png"/>
                        <h3>Samsung Galaxy<br/>Note 8</h3>
                        <h4>มูลค่า 33,900 บาท</h4>
                        <div>2 รางวัล</div>
                      </div>
                    </div>
                    <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize3.png"/>
                        <h3>Garmin<br/>Fenix 5X</h3>
                        <h4>มูลค่า 27,900 บาท</h4>
                        <div>3 รางวัล</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-x">
                    <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize4.png"/>
                        <h3>GaRmin<br/>VivoFit 3</h3>
                        <h4>มูลค่า 4,190 บาท</h4>
                        <div>5 รางวัล</div>
                      </div>
                    </div>
                    <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize5.png"/>
                        <h3>บัตรชมภาพยนตร์<br/>เมเจอร์ ซีนีเพล็กซ์</h3>
                        <h4>รางวัลละ 2 ใบ มูลค่าใบละ xxx บาท</h4>
                        <div>100 รางวัล</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>
        <a onClick={this.onClickHowTo} className="button-line">วิธีร่วมกิจกรรม</a>
        </div>
      );
  }
});

module.exports = Reward;
