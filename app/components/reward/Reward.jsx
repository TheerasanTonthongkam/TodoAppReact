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
            <p>รวมกว่า 800 รางวัล รวมมูลค่ากว่า <strong>500,000</strong> บาท</p>
              <div className="grid-x">
                <div className="medium-12 large-6 columns">
                  <div className="reward-card big">
                    <img src="../img/hat.png"/>
                    <h3>หมวกพร้อมลายเซ็นจาก<br/>David Beckham</h3>
                    <div>1 รางวัล</div>
                  </div>
                </div>
                <div className="medium-12 large-6 columns">
                  <div className="grid-x">
                    <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize-1.png"/>
                        <h3>Samsung Galaxy Note 8</h3>
                        <h4>มูลค่า 33,900 บาท</h4>
                        <div>2 รางวัล</div>
                      </div>
                    </div>
                    <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize-2.png"/>
                        <h3>Garmin VivoFit 3</h3>
                        <h4>มูลค่า 4,190 บาท</h4>
                        <div>30 รางวัล</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-x">
                  <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize-3.png"/>
                        <h3>บัตรชมภาพยนตร์<br/>ในเครือเมเจอร์ซีนีเพล็กซ์</h3>
                        <h4>รางวัลละ 2 ใบ</h4>
                        <div>300 รางวัล</div>
                      </div>
                    </div>
                    <div className="small-6 large-6 columns">
                      <div className="reward-card">
                        <img src="../img/prize-4.png"/>
                        <h3>ของที่ระลึกจาก AIA VITALITY</h3>
                        <h4>รางวัลละ 200 บาท</h4>
                        <div>500 รางวัล</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <p>และรางวัลอื่นๆเพิ่มเติมอีกมากมาย</p>
        </div>

        <a onClick={this.onClickHowTo} className="button-line">เงื่อนไขและกติกาการร่วมสนุก</a>
        </div>
      );
  }
});

module.exports = Reward;
