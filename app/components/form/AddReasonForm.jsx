var React = require('react');
var services = require('Services');
var Loading = require('Loading');
var AutoComplete = require('react-autocomplete');
var FormData = require('form-data');
var {Link, IndexLink} = require('react-router');

var AddReasonForm = React.createClass({
  onClickPlayAgain: function(e) {
    e.preventDefault();
    this.setState({
      file: '',
      value: '',
      textLeft: 20,
      reason: '',
      imagePath: '',
      isLoading: false,
      isPost: false,
      imageUrl: '',
      imageToShow: ''
    });
  },
  onClickShare: function(e) {
    e.preventDefault();
    var postId = this.getCookie('userId');
    // var url = window.location.href.replace(window.location.hash, `#/livewall?postId=${postId}`);
    var url = this.state.imageUrl;
    console.log(url);

    FB.ui(
       {
        method: 'share',
        href: url,
        hashtag: '#WhatsYourWhy',
        quote: `${this.state.value} - ${this.state.reason} #AIA`
      }, function(response){});

  },
  onFormSubmit: function(e) {
      e.preventDefault();
      this.generateCanvas();
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
          let preCanvas = $('#preCanvas');
          let ratio = 1;

          this.setState({
            file: file,
            imagePath: reader.result,
            imageToShow: reader.result,
            width: img.width() * ratio,
            height: img.height() * ratio
          });

          ratio = preCanvas.width() / img.width();

          console.log(ratio + " : " + this.state.width + " : " + this.state.height);

          this.setState({
                ...this.state,
                width: img.width() * ratio,
                height: img.height() * ratio
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
      imageUrl: '',
      imageToDownload: '',
      width:1400,
      height:1184
    };
  },
  generateCanvas: function() {
    let that = this;
        html2canvas($('#preCanvas'), {
            onrendered: function(canvas) {
              var _that = that;
              canvas.toBlob(function(blob) {
                  console.log(blob);
                  var f = new File([blob], "filename.png");
                  console.log(f);
                  _that.setState({
                      imageToDownload: canvas.toDataURL('image/png'),
                      file: f
                  });

                  let data = new FormData();
                  data.append('file', _that.state.file);
                  data.append('postId', _that.getCookie('userId'));
                  data.append('reasonCode', _that.state.value);
                  data.append('reasonPhrase', _that.state.reason);

                  var __that = _that;

                  __that.setState({
                    isLoading: true
                  })

                  var element = document.getElementById("main-form");
                  element.scrollIntoView();

                  services.postCampaign(data).then(function(data) {
                    __that.setState({
                      isLoading: false,
                      isPost: true,
                      imageUrl: data.imagePath
                    })

                    var element = document.getElementById("thank");
                    element.scrollIntoView();

                  }, function (e) {
                    alert('Unable to Posted ' + e.message);
                    __that.setState({
                      isLoading: false
                    });
                  });
              });

            },
        });
  },
  replaceAt:function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
  },
  render: function() {
    var {textLeft,
      imagePath,
      value,
      reason,
      isLoading,
      isPost,
      imageToDownload,
      imageToShow, width, height, imageToDownload} = this.state;

    var specialLetter = ['ุ',
                          'ู',
                          'ึ',
                          'ํ',
                          'ั',
                          'ี',
                          '๊',
                          '็',
                          '้',
                          '่',
                          '๋',
                          'ิ',
                          'ื',
                          '์'];
      var valueConvert = value.replace('ำ','ํา') + '.' ;
      var reasonConvert = reason.replace('ำ','ํา') + '.';

      var max = valueConvert.length;
      var tmp = valueConvert;
      for (var i = max; i > 0 ; i --) {
        console.log(valueConvert[i] + " " + i + " " + specialLetter.indexOf(valueConvert[i]));
        if (specialLetter.indexOf(valueConvert[i]) >= 0) {
            var c = valueConvert[i];
            tmp = tmp.substring(0, i) + tmp.substring(i+1, i+2) + c + tmp.substring(i+2, max);
        }
      }

      valueConvert = tmp;
      valueConvert = valueConvert.replace('.', ' ');

      //============

      tmp = reasonConvert;
      for (var i = max; i > 0 ; i --) {
        console.log(reasonConvert[i] + " " + i + " " + specialLetter.indexOf(reasonConvert[i]));
        if (specialLetter.indexOf(reasonConvert[i]) >= 0) {
            var c = reasonConvert[i];
            tmp = tmp.substring(0, i) + tmp.substring(i+1, i+2) + c + tmp.substring(i+2, max);
        }
      }

      reasonConvert = tmp;
      reasonConvert = reasonConvert.replace('.', ' ');

      //============

    let canvasHeight = $('#preCanvas').height();
    let top = (canvasHeight - height)/2;
    if (top < 0) {
        top = 0;
    }
    console.log(canvasHeight, top);

    let style = {
        top: width*120/600,
        left: 0
    };


    var postId = this.getCookie('userId');

    var divStyle = {
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%'
    };

    let renderDownloadButton = () => {
            if (imageToDownload !== '') {
                return <a href={imageToDownload} download={"image_"} className="button expanded large">บันทึกรูป</a>
            }
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
                <a href={imageToDownload} download={"image_AIA.png"} className="button-line light">บันทึกรูป</a>
              </div>
              <div className="small-12 cell">
                <a href="#" className="button-line light" onClick={this.onClickPlayAgain}>เล่นอีกครั้ง</a>
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

            <div id="preCanvas">
              <img src="../img/frame.png" className="frame">

              </img>
              <div className="text">
                <div className="reason">{valueConvert}</div>
                <div className="why">{reasonConvert}</div>
              </div>
              <div className="text-foot">
                #W<span className="text-small">hats</span>Y<span className="text-small">our</span>W<span className="text-small">hy</span>
              </div>
              <img src={imageToShow}
                width={width}
                height={height}
                id="baseImage"
                style={style}
                />
            </div>

            <div className="small-12 large-4 large-offset-2 cell">
              <div id="preCanvas2">
                <img src="../img/frame.png" className="frame">

                </img>
                <div className="text">
                  <div className="reason">{value}</div>
                  <div className="why">{reason}</div>
                </div>
                <div className="text-foot">
                  #W<span className="text-small">hats</span>Y<span className="text-small">our</span>W<span className="text-small">hy</span>
                </div>
                <img src={imageToShow}
                  width={width}
                  height={height}
                  id="baseImage2"
                  style={style}
                  />
              </div>
            </div>
            <div className="small-12 large-5  cell">
              <form id="campaignForm" onSubmit={this.onFormSubmit} encType="multipart/form-data">
                <div className="auto-complete">
                  <input type="text" placeholder="เลือกกิจกรรมของคุณ" value={this.state.value} name="reasonCode" required/>
                    <AutoComplete
                      items={[
                        { id: '1', label: 'ออกกำลังกาย' },
                        { id: '2', label: 'ทานอาหารสุขภาพ' },
                        { id: '3', label: 'เลิกเหล้า/เลิกบุหรี่' },
                        { id: '4', label: 'พักผ่อน' },
                        { id: '5', label: 'ดื่มน้ำให้มากขึ้น' }
                      ]}
                      placeholder="เลือกกิจกรรมของคุณ"
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

                <a href="#" className="button-line gray file expanded">อัปโหลดรูป
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
