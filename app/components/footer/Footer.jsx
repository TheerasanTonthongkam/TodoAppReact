var React = require('react');
var {Link, IndexLink} = require('react-router');

var Footer = React.createClass({
  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({value: event.target.value});
  },
  onClickGo(event) {
    event.preventDefault()
    window.open(this.state.value, '_blank');
  },
  render: function() {
    return (
        <div id="footer">
            <div className="grid-x grid-margin-x">
              <div className="small-12 large-2 cell">
                <h2>CONTACT AIA GROUP</h2>
                <a href="http://www.aia.com/en/about-aia/contact-us.html" className="button-line" href="#">CLICK FOR DETAILS</a>
              </div>
              <div className="small-12 large-3 large-offset-1 cell">
                <h2>VISIT OUR MARKET SITES</h2>
                <div className="grid-x">
                  <div className="small-12 large-10 cell">
                    <select name="ddlFooterCountry" id="aia1714185019" onChange={this.handleChange} >
                      <option value="none" defaultValue>-- Please select --</option>
                      <option value="http://www.aia.com.au/">Australia</option>
                      <option value="http://www.aia.com.cn/" >China</option>
                      <option value="http://www.aia.com.kh" >Cambodia</option>
                      <option value="http://www.aia.com.hk/" >Hong Kong &amp; Macau</option>
                      <option value="http://www.aia-financial.co.id/">Indonesia</option>
                      <option value="http://www.aia.com.my/">Malaysia</option>
                      <option value="http://www.aia.co.nz/" >New Zealand</option>
                      <option value="http://www.philamlife.com/en/" >Philippines</option>
                      <option value="http://www.aia.com.sg/" >Singapore</option>
                      <option value="http://www.aia.co.kr/" >Korea</option>
                      <option value="http://aialife.com.lk/" >Sri Lanka</option>
                      <option value="http://www.aiaco.com.tw/" >Taiwan</option>
                      <option value="http://www.aia.co.th/" >Thailand</option>
                      <option value="http://www.aia.com.vn/">Vietnam</option>
                    </select>
                  </div>
                  <div className="small-12 large-2 cell">
                    <a className="button-line" href="#" onClick={this.onClickGo}>GO</a>
                  </div>
                </div>
              </div>
              <div className="small-12 large-2 large-offset-1 cell">
                <h2>ABOUT AIA</h2>
                <a href="http://www.aia.com/en/about-aia/the-real-life-company.html">The Real Life Company</a>
                <br/>
                <a href="http://www.aia.com/en/about-aia/solutions-to-meet-real-life-needs.html">Solutions to Meet Real Life Needs</a>
                <br/>
                <a href="http://www.aia.com/en/about-aia/aia-vitality.html">AIA Vitality</a>
              </div>
              <div className="small-12 large-3 cell">
                <h2>GLOBAL PRICIPAL PARTNER</h2>
                <a target="_blank" href="http://www.tottenhamhotspur.com/home/">
                  <img src="../img/footer_logo.png"/>
                </a>
              </div>
            </div>

            <div className="line"></div>

          <div className="link">
            <a target="_blank" href="https://www.linkedin.com/company-beta/406952">
              <img src="../img/linkedin.png"/>
            </a>
            <a className="center" target="_blank" href="https://twitter.com/AIAGroup_Press">
              <img src="../img/twitter.png"/>
            </a>
            <a target="_blank" href="https://www.youtube.com/user/AIAGroup">
              <img src="../img/youtube.png"/>
            </a>
          </div>

          <div className="copy-right">
            Copyright ©︎ 2017, AIA Group Limited and its subsidiaries. All rights reserved.
          </div>

        </div>
    );
  }
});

module.exports = Footer;
