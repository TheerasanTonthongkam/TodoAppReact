var React = require('react');
var services = require('Services');
var Loading = require('Loading');
var AutoComplete = require('react-autocomplete');
var FormData = require('form-data');
var {Link, IndexLink} = require('react-router');
var DropDown = require('DropDown');

var AddReasonForm = React.createClass({
  onClickPlayAgain: function(e) {
    var defaultTop = 50;
    if ($('#preCanvas2').width() < 400) {
      defaultTop = 30;
    }
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
      imageToShow: '../img/preview_1.jpg',
      img1: '',
      img2: 'active',
      img3: '',
      top: defaultTop,
      left: 0,
      rotate: 0,
      zoom: 100,
      postId: 0
    });
  },
  onClickShare: function(e) {
    e.preventDefault();
    var userId = this.getCookie('userId');
    // var url = window.location.href.replace(window.location.hash, `#/livewall?postId=${postId}`);
    // var url = this.state.imageUrl;
    var url = "http://campaigns.aia.co.th/whatsyourwhy/share.php?id=" + this.state.postId + "&ios=" + this.isIOS();

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
            height: img.height() * ratio,
            img1: '',
            img2: '',
            img3: ''
          });

          ratio = preCanvas.width() / img.width();

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
    var defaultTop = 50;
    if ($('#preCanvas2').width() < 400) {
      defaultTop = 30;
    }

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
      imageToShow: '../img/preview_1.jpg',
      width:1400,
      height:1184,
      img1: '',
      img2: 'active',
      img3: '',
      top: defaultTop,
      left: 0,
      rotate: 0,
      zoom: 100,
      openPoint: 0,
      postId: 0
    };
  },
  isIOS: function() {

  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    if (!!window.indexedDB) { return true }
    if (!!window.SpeechSynthesisUtterance) { return true; }
    if (!!window.webkitAudioContext) { return true; }
    if (!!window.matchMedia) { return true; }
    if (!!window.history && 'pushState' in window.history) { return true; }
    return true;
  }

  if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 0) {return true;}

  return false;
},
  generateCanvas: function() {
    let that = this;
        html2canvas($('#preCanvas'), {
            onrendered: function(canvas) {
              var _that = that;
              canvas.toBlob(function(blob) {
                //location.href = canvas.toDataURL('image/png');
                console.log("blob");
                  console.log(blob);
                  var f = new File([blob], "filename.png", {type: blob.type});
                  if (that.isIOS()) {
                    f = $('input[type=file]')[0].files[0];
                  }

                  _that.setState({
                      imageToDownload: canvas.toDataURL('image/png'),
                      file: f
                  });

                  let data = new FormData();

                  data.append('file', f);
                  data.append('postId', _that.getCookie('userId'));
                  data.append('reasonCode', _that.state.value);
                  data.append('reasonPhrase', _that.state.reason);

                  var __that = _that;
                  __that.setState({
                    isLoading: true
                  })

                  var element = document.getElementById("main-form");
                  element.scrollIntoView();

                  console.log(_that.state.file);

                  services.postCampaign(data).then(function(data) {
                    __that.setState({
                      isLoading: false,
                      isPost: true,
                      imageUrl: data.imagePath,
                      postId: data.id
                    })

                    var element = document.getElementById("thank");
                    element.scrollIntoView();

                  }, function (e) {
                    alert('Unable to Posted ' + e);
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
  adjustImage: function(e) {
    e.preventDefault();
    var v = e.target.getAttribute("data-value");
    var {top, left, rotate, zoom} = this.state;
    if (v == 1) {
      left = left - 10;
    }
    if (v == 2) {
      left = left + 10;
    }

    if (v == 3) {
      top = top - 10;
    }

    if (v == 4) {
      top = top + 10;
    }
    if (v == 5) {
      rotate = rotate - 90;
    }

    if (v == 6) {
      zoom = zoom + 10;
    }

    if (v == 7 && zoom > 50) {
      zoom = zoom - 10;
    }

    this.setState({
      top: top,
      left: left,
      rotate: rotate,
      zoom: zoom
    })
  },
  selectImage: function(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("data-value"));
    this.setState({
      imageToShow: e.target.src,
      img1: '',
      img2: '',
      img3: ''
    });

    if (e.target.getAttribute("data-value") == 1 ) {
      this.setState({img1: 'active'});
    }

    if (e.target.getAttribute("data-value") == 2 ) {
      this.setState({img2: 'active'});
    }

    if (e.target.getAttribute("data-value") == 3 ) {
      this.setState({img3: 'active'});
    }
  },
  onDataChange: function(data) {

  },
  render: function() {
    var {textLeft,
      imagePath,
      value,
      reason,
      isLoading,
      isPost,
      imageToDownload,
      imageToShow, width, height, imageToDownload,
      img1, img2, img3,
      top,
      left,
      rotate,
    zoom} = this.state;

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
        if (specialLetter.indexOf(valueConvert[i]) >= 0) {
            var c = valueConvert[i];
            tmp = tmp.substring(0, i) + tmp.substring(i+1, i+2) + c + tmp.substring(i+2, max);
        }
      }

      valueConvert = tmp;
      valueConvert = valueConvert.replace('.', ' ');

      tmp = reasonConvert;
      var max = reasonConvert.length;
      for (var i = max; i > 0 ; i --) {
        if (specialLetter.indexOf(reasonConvert[i]) >= 0) {
            var c = reasonConvert[i];
            tmp = tmp.substring(0, i) + tmp.substring(i+1, i+2) + c + tmp.substring(i+2, max);
        }
      }

      reasonConvert = tmp;
      reasonConvert = reasonConvert.replace('.', ' ');

    let canvasHeight = $('#preCanvas').height();

    var defaultTop = 50;

    if ($('#preCanvas2').width() < 400) {
      defaultTop = 30;
    }

    let style = {
        top: top+'px',
        left: left+'px',
        transform: `rotate(${rotate}deg)`,
        width: `${zoom}%`
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

  let renderInputFile = () => {
    if (this.isIOS()) {
      return (
        <input type="file" className="file" accept="image/*" name="file" onChange={this.onImageChange} required/>
      )
    } else {
      return (
        <input type="file" className="file" accept="image/*" name="file" onChange={this.onImageChange} />
      )
    }
  }

  let renderEditTool = () => {
    if (!this.isIOS()) {
      return (
        <div id="select-image" className="grid-x grid-margin-x">
          <div className="small-3 small-offset-1 cell">
            <a onClick={this.adjustImage}>
              <img src="../img/ic_move_left.png" data-value="1"/>
            </a>
            <a onClick={this.adjustImage}>
              <img src="../img/ic_move_right.png" data-value="2"/>
            </a>
          </div>

          <div className="small-3 cell">
            <a onClick={this.adjustImage}>
              <img src="../img/ic_move_up.png" data-value="3"/>
            </a>
            <a onClick={this.adjustImage}>
              <img src="../img/ic_move_down.png" data-value="4"/>
            </a>
          </div>
          <div className="small-3 cell">
            <a onClick={this.adjustImage}>
              <img src="../img/ic_zoom_in.png" data-value="6"/>
            </a>
            <a onClick={this.adjustImage}>
              <img src="../img/ic_zoom_out.png" data-value="7"/>
            </a>
          </div>
          <div className="small-2 cell">
            <a onClick={this.adjustImage}>
              <img src="../img/ic_rotate.png" data-value="5"/>
            </a>
          </div>

          <div className="small-12 cell">
            <br/>
          </div>

          <div className="small-4 cell">
            <a className={img1} onClick={this.selectImage} ref="a1">
              <img src="../img/preview_2.jpg" data-value="1"/>
            </a>

          </div>
          <div className="small-4 cell">
            <a className={img2} onClick={this.selectImage} ref="a2">
              <img src="../img/preview_1.jpg" data-value="2"/>
            </a>
          </div>
          <div className="small-4 cell">
            <a className={img3} onClick={this.selectImage} ref="a3">
              <img src="../img/preview_3.jpg" data-value="3"/>
            </a>
          </div>
        </div>
      );
    }
  }

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
            <Loading />
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

          </div>
        );
      } else {
        return (
          <div className="grid-x grid-margin-x" style={{position: 'relative'}}>

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

              {renderEditTool()}

            </div>
            <div className="small-12 large-5  cell">
              <form id="campaignForm" onSubmit={this.onFormSubmit} encType="multipart/form-data">
                  <div className="auto-complete" style={{position: 'relative', zIndex: 1}}>
                    <input type="text" placeholder="เลือกกิจกรรมของคุณ" value={this.state.value} name="reasonCode" required/>
                    <AutoComplete
                      id="auto-complete"
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
                      onSelect={value => this.setState({value })}
                      wrapperStyle={{
                        display: 'block',
                        width: '100%',
                        position: 'relative !important'
                      }}/>
                </div>

                <label style={{ marginTop: '20px' }}>เหตุผลของฉันคือ (จำกัดไม่เกิน 20 ตัวอักษร)</label>
                <textarea id="textarea" required placeholder="พิมพ์ที่นี่" maxLength="20" ref="message" name="reasonPhrase" onChange={this.onTextChange}></textarea>

                <div className="text-count">
                  {textLeft}
                </div>

                <a className="button-line gray file expanded">อัปโหลดรูป
                  {renderInputFile()}
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
  handleScroll: function(e) {

    var nodeCount = $('.auto-complete')[0].childNodes[1].childNodes.length;
    if (nodeCount == 2) {
     var eTop = $('.auto-complete').position().top;
     var parent = $('.auto-complete').parent().parent().parent().position().top;
     console.log(((eTop + parent) - $(window).scrollTop()) + 40 );
     $('.auto-complete')[0].childNodes[1].childNodes[1].style.top = ((eTop + parent) - $(window).scrollTop()) + 60 +'px';
    }
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  componentDidMount: function () {
    window.addEventListener('scroll', this.handleScroll);
    $('.auto-complete')[0].childNodes[1].childNodes[0].placeholder = "กิจกรรมของคุณคือ";
  }
});

module.exports = AddReasonForm;
