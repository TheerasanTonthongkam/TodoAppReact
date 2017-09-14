var React = require('react');
var {Link, IndexLink} = require('react-router');
var RuningNumber = require('RuningNumber');

var BodyContent = React.createClass({

  render: function () {
    return (
      <div id="body-content">
        <div className="map">
          <div className="all-title">
            <img className="map-title" src="../img/Title.png"/>
            <h2><span className="big">68</span> ล้านเหตุผล ที่คนไทยเริ่มต้นดูแลสุขภาพ</h2>
          </div>
          <div className="map-body">
            <img src="../img/map.png"/>
          </div>

          <div>
            <RuningNumber/>
            <span className="leading-text">
              ร่วมเป็นส่วนหนึ่งบน<br/>
                  AIA’s #W<span className="text-small">hats</span>Y<span className="text-small">our</span>W<span className="text-small">hy</span> Live Wall แล้ว

                  <a id="join-btn" href="#main-form" className="join-btn" data-smooth-scroll data-animation-easing="swing" data-threshold="0">ร่วมสนุกเลย</a>
            </span>


          <span className="des-text">
          เอไอเอ เราส่งเสริมให้คนไทยมีคุณภาพชีวิตที่ดี สุขภาพแข็งแรง และมีอายุยืนยาว
          เราจึงได้จับมือกับ David Beckham แบรนด์แอมบาสเดอร์ระดับโลก เพื่อตั้งคำถามกับ
          ผู้คนทั่วโลกถึง “เหตุผล” ที่ทำให้พวกเขามุ่งมั่นเปลี่ยนแปลงให้สุขภาพของตัวเองดีขึ้น
          และไม่ว่า “เหตุผล” ของคุณคืออะไร ที่ เอไอเอ เรามี “วิธี” พาคุณไปให้ถึงเป้าหมายนั้นเสมอ<br/>
<span className="text-big">แล้วเหตุผลของคุณคืออะไร?</span>
          </span>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function () {
    var elem = new Foundation.SmoothScroll($('#join-btn'), null);
  }
});

module.exports = BodyContent;
