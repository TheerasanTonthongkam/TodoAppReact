var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var HowTo = React.createClass({

  componentDidMount: function () {
    var modalMarkup = (
      <div className="reveal text-center" id="how-to-modal" data-reveal="">
        <h3>วิธีการร่วมสนุก</h3>

        <ul className="number">
          <li>
            ลงทะเบียน หรือ ล็อคอินผ่าน Facebook
            <img src="../img/m-f-1.png" className="hide-for-large"></img>
            <img src="../img/d-f-1.png" className="show-for-large"></img>
          </li>
          <li>
            อัปโหลด #WhatsYourWhy เหตุผลที่ทำให้คุณ
           เริ่มต้นเปลี่ยนแปลงตัวคุณให้มีสุขภาพดี
           (รูป + ข้อความ)
            <img src="../img/m-f-2.png" className="hide-for-large"></img>
            <img src="../img/d-f-2.png" className="show-for-large"></img>
          </li>
          <li>
            แชร์ไปยังโซเชียลมีเดีย เพื่อลุ้น
            หมวกพร้อมลายเซ็น David Beckham
          </li>
          <li>
            #WhatsYourWhy ของคุณจะปรากฏบน
             Live Wall ร่วมกับเหตุผลของคนไทยอื่นๆ
             แบบเรียลไทม์
          </li>
        </ul>

        <h3>เงื่อนไขการรับรางวัล</h3>
        <ul>
          <li>
            กิจกรรมนี้เริ่มต้นตั้งแต่วันที่ 15 กันยายน 2560 และสิ้นสุดในวันที่
  15 ธันวาคม 2560
          </li>
          <li>
            ผู้ร่วมกิจกรรมจะต้องปฎิบัติตามวิธีการเล่นของกิจกรรมอย่างถูกต้อง
  ทั้งหมด และลงทะเบียนผู้ใช้ หรือ ล็อคอินผ่าน บัญชี
  Social Network  เพื่อร่วมกิจกรรม
          </li>
          <li>
ผู้ได้รับรางวัลจะต้องชำระภาษีหัก ณ ที่จ่าย 5% จากมูลค่าของรางวัล
  หากรางวัลที่ได้รับมีมูลค่า ตั้งแต่ 1,000 บาทขึ้นไป
          </li>
          <li>
            ผู้ร่วมกิจกรรมสามารถตรวจสอบรายชื่อผู้ได้รับรางวัลผ่านทางเว็บไซต์
  www.campaigns.aia.co.th/whatsyourwhy
  และรออีเมลยืนยันสิทธิ์การรับของรางวัล ภายใน 30 วัน
  หลังวันประกาศผล
          </li>
          <li>
            ของรางวัลไม่สามารถแลกเปลี่ยนเป็นเงินสดได้
          </li>
          <li>
            ทางบริษัทฯ ขอสงวนสิทธิ์ในการนำเนื้อหา ข้อมูล
  หรือรูปภาพจากผู้ร่วมกิจกรรมไปใช้ เพื่อเป็นการสร้างแรงบันดาล
  ใจในการเริ่มต้นดูแลสุขภาพให้ผู้อื่นในนามของบริษัทฯ
          </li>
          <li>
            ทางบริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงรายละเอียดต่างๆ
  รวมทั้งของรางวัล โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
          </li>
          <li>
            คำตัดสินของคณะกรรมการถือเป็นที่สิ้นสุด
          </li>
          <li>
            ผู้ที่ได้รับรางวัล จะต้องมารับด้วยตัวเองเท่านั้น พร้อมชำระภาษี ณ ที่จ่าย
  ภายใน 30 วัน หลังวันประกาศผล
          </li>
          <li>
            สถานที่รับรางวัล : บริษัท แมคฟิว่า(ประเทศไทย) จำกัด (สำนักงานใหญ่)
  ที่อยู่ 496-502 อาคารอัมรินทร์พลาซ่า ชั้น 12 ถนนเพลินจิต
  แขวงลุมพินี เขตปทุมวัน กรุงเทพมหานคร 10330
          </li>
        </ul>

        <p>
          หมายเหตุ :<br/>บริษัทฯขอสงวนสิทธิ์ในการลบภาพหรือข้อความที่ไม่เหมาะสมโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
        </p>

        <button className="button-line" data-close="" >CLOSE</button>

        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#how-to-modal'));
    modal.open();
  },
  render: function () {
    return (<div></div>);
  }

});

module.exports = HowTo;
