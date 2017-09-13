var React = require('react');
var services = require('Services');
var Loading = require('Loading');
var AutoComplete = require('react-autocomplete');
var FormData = require('form-data');
var {Link, IndexLink} = require('react-router');

var AddReasonForm = React.createClass({
  onClickShare: function(e) {
    e.preventDefault();
    var postId = this.getCookie('userId');
    var url = window.location.href.replace(window.location.hash, `#/livewall?postId=${postId}`);

    console.log(url);
    FB.ui(
       {
        method: 'share',
        href: url
      }, function(response){});
  },
  onFormSubmit: function(e) {
      e.preventDefault();
      console.log(this.getCookie('userId'));
      let data = new FormData();
      data.append('file', this.state.file);
      data.append('postId', this.getCookie('userId'));
      data.append('reasonCode', this.state.value);
      data.append('reasonPhrase', this.state.reason);


      var that = this;
      that.setState({
        isLoading: true
      })

      services.postCampaign(data).then(function(data) {
        that.setState({
          isLoading: false,
          isPost: true,
          imageUrl: data.imagePath
        })
      }, function (e) {
        alert('Unable to Posted');
      });
  },
  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  },
  onImageChange(e) {
    e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            let img = $('#baseImage');
            this.setState({
              file: file,
              imagePath: reader.result
            });

        };
        reader.readAsDataURL(file);
  },
  onTextChange(event) {
    event.preventDefault();
    var text = 20 - event.target.value.length;
    this.setState({
      textLeft: text,
      reason: event.target.value
    });
  },
  getInitialState: function() {
    return {
      file: '',
      value: '',
      textLeft: 20,
      reason: '',
      imagePath: '',
      isLoading: false,
      isPost: false,
      imageUrl: ''
    };
  },
  render: function() {
    var {textLeft, imagePath, value, reason, isLoading, isPost} = this.state;
    var postId = this.getCookie('userId');

    var divStyle = {
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%'
    };

    var renderForm = () => {
      if (isPost) {
        return (
          <div id="thank">
            <h2>
              ขอบคุณที่ร่วมกิจกรรมกับ AIA
ติดตามรายชื่อผู้โชคดีเร็วๆนี้
            </h2>
            <div className="grid-x grid-margin-x">
              <div className="small-12 large-6 cell">
                <a href="#" className="button-line light" onClick={this.onClickShare}>แชร์ <img src="../img/fb-art.png"/></a>
              </div>
              <div className="small-12 large-6 cell">
                <a href="#" className="button-line light">SAVE รูป</a>
              </div>
              <div className="small-12 cell">
                <Link to={`/livewall?postId=${postId}`} className="button-line">ดู LIVE WALL ของคุณ</Link>
              </div>
            </div>
          </div>
        );
      } else if (isLoading) {
        return (
          <div>
            <div className='live-wall-card big' style={{opacity: 0}}>
              <div className="text">
                  <div className="reason">{value}</div>
                  <div className="why">{reason}</div>
              </div>
              <div className="img" style={divStyle}>
              </div>
              <div className="text">
                <img src="../img/WhayYourWhy-Logo.png"/>
              </div>
            </div>
            <Loading/>
          </div>
        );
      } else {
        return (
          <div className="grid-x grid-margin-x">
            <div className="small-12 large-4 large-offset-2 cell">
              <div className='live-wall-card big'>
                <div className="text">
                    <div className="reason">{value}</div>
                    <div className="why">{reason}</div>
                </div>
                <div className="img" style={divStyle}>
                </div>
                <div className="text">
                  <img src="../img/WhayYourWhy-Logo.png"/>
                </div>
              </div>
            </div>
            <div className="small-12 large-5  cell">
              <form id="campaignForm" onSubmit={this.onFormSubmit} encType="multipart/form-data">
                <div className="auto-complete">
                  <input type="text" value={this.state.value} name="reasonCode" required/>
                    <AutoComplete
                      items={[
                        { id: '1', label: 'ออกกำลังกาย' },
                        { id: '2', label: 'กินอาหารสุขภาพ' },
                        { id: '3', label: 'เลิกบุหรี่' },
                        { id: '4', label: 'เลิกเหล้า' },
                        { id: '5', label: 'นอนเร็ว ตื่นเช้า' },
                        { id: '6', label: 'วิ่งทุกวัน' }
                      ]}
                      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                      getItemValue={item => item.label}
                      renderItem={(item, highlighted) =>
                        <div
                          key={item.id}
                          style={{ backgroundColor: highlighted ? '#fff' : '#ebebeb',
                              color: '#000',
                              padding: '5px 10px',
                              fontFamily: 'AIA-head',
                              fontSize: '24px',
                              width: '100%',
                              zIndex: '99'
                          }}
                        >
                          {item.label}
                        </div>
                      }
                      value={this.state.value}
                      onChange={e => this.setState({ value: e.target.value })}
                      onSelect={value => this.setState({ value })}
                      wrapperStyle={{
                        display: 'block',
                        width: '100%'
                      }}/>
                </div>

                <label style={{ marginTop: '20px' }}>เหตุผลของฉันคือ</label>
                <textarea required placeholder="พิมพ์ที่นี่" maxLength="20" ref="message" name="reasonPhrase" onChange={this.onTextChange}></textarea>

                <div className="text-count">
                  {textLeft}
                </div>

                <a href="#" className="button-line gray file expanded">อัพโหลดรูป
                  <input type="file" className="file" accept="image/*" name="file" onChange={this.onImageChange} required/>
                </a>

                <button type="submit" className="button-line expanded" >SUBMIT</button>
              </form>
            </div>
          </div>
        );
      }
    }

    return (
        <div id="add-reason-form">
          {renderForm()}
        </div>
    );
  },
  componentDidMount: function () {

  }
});

module.exports = AddReasonForm;
