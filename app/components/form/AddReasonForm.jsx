var React = require('react');
var services = require('Services');
var Loading = require('Loading');
var AutoComplete = require('react-autocomplete');
var FormData = require('form-data');

var AddReasonForm = React.createClass({
  onFormSubmit: function(e) {
      e.preventDefault();
      console.log(this.getCookie('userId'));
      let data = new FormData();
      data.append('file', this.state.file);
      data.append('postId', this.getCookie('userId'));
      data.append('reasonCode', this.state.value);
      data.append('reasonPhrase', this.state.reason);


      var that = this;
      services.postCampaign(data).then(function(data) {
        console.log("Posted");
        console.log(data);
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
    var text = 40 - event.target.value.length;
    this.setState({
      textLeft: text,
      reason: event.target.value
    });
  },
  getInitialState: function() {
    return {
      file: '',
      value: '',
      textLeft: 40,
      reason: '',
      imagePath: ''
    };
  },
  render: function() {
    var {textLeft, imagePath, value, reason} = this.state;

    var divStyle = {
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%'
    };

    return (
        <div id="add-reason-form">
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
                <textarea required placeholder="พิมพ์ที่นี่" maxLength="40" ref="message" name="reasonPhrase" onChange={this.onTextChange}></textarea>

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
        </div>
    );
  },
  componentDidMount: function () {

  }
});

module.exports = AddReasonForm;
