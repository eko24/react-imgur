var React = require('react');
var Dropzone = require('react-dropzone');
var Api = require('../utils/api');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore,'onChange')],
  getInitialState: function() {
    return {
      image:null
    };
  },
  onDrop: function (files) {
    var data = new FormData();

    files.map(function(file) {
      data.append('image', file)
    });

    Actions.uploadImage(data);
  },

  render: function () {
    return (
          <div className="navbar-form navbar-left image-upload">
            <Dropzone onDrop={this.onDrop} className="btn btn-info" disableClick="true" multiple="false">
              <div>Drop to upload</div>
            </Dropzone>
          </div>
    );
  },
  onChange: function(event, image) {
    console.log(image);
    this.setState({
      image:image
    })
  }
});
