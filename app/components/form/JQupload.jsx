var React = require('react');
var FormWrapper = require('FormWrapper');

var JQupload = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('postId', '1');
    formData.append('reasonCode', 'previewImg');
    formData.append('reasonPhrase', 'previewImg');
    formData.append('file', $('input[type=file]')[0].files[0]);
    $.ajax({
      url: "http://104.198.185.202/api/campaign",
      data: formData,
      type: 'POST',
      contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
      processData: false,
      success: function(data) {alert(data);}
    });
    // $.post( "http://104.198.185.202/api/campaign",
    // { postId: "1",
    //   reasonCode: "ออกกำลังกาย",
    //   reasonPhrase: "ก็ชอบอะ"
    //   })
    //   .done(function( data ) {
    //     alert( "Data Loaded: " + data );
    //   })
    //   .fail(function() {
    //     alert( "error" );
    //   });
  },
  render: function() {
    return (
        <div id="main-form">
          <form onSubmit={this.onSubmit}>
            <input type="text" name="postId"></input>
            <input type="text" name="reasonCode"></input>
            <input type="text" name="reasonPhrase"></input>
            <input type="file" name="file"></input>
            <button type="submit">submit</button>
          </form>
        </div>
    );
  }
});

module.exports = JQupload;
