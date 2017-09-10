var React = require('react');

var Reward = React.createClass({
    render: function() {
        return (
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
                        <div className="small-6 columns">
                          <div className="reward-card">
                            <img src="../img/prize2.png"/>
                            <h3>Samsung Galaxy Note 8</h3>
                            <h4>มูลค่า 33,900 บาท</h4>
                            <div>2 รางวัล</div>
                          </div>
                        </div>
                        <div className="small-6 columns">
                          <div className="reward-card">
                            <img src="../img/prize3.png"/>
                            <h3>Garmin Fenix 5X</h3>
                            <h4>มูลค่า 27,900 บาท</h4>
                            <div>3 รางวัล</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-x">
                        <div className="small-6 columns">
                          <div className="reward-card">
                            <img src="../img/prize4.png"/>
                            <h3>Gift Voucher จาก<br/>Adidas</h3>
                            <h4>มูลค่า 5,000 บาท</h4>
                            <div>5 รางวัล</div>
                          </div>
                        </div>
                        <div className="small-6 columns">
                          <div className="reward-card">
                            <img src="../img/prize5.png"/>
                            <h3>Gift Voucher จาก Tops Supermarket</h3>
                            <h4>มูลค่า 1,000 บาท</h4>
                            <div>25 รางวัล</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        );
    }
});

module.exports = Reward;
