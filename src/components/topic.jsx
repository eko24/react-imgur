var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins:[
    Reflux.listenTo(ImageStore,'onChange')
  ],
  getInitialState: function() {
    return {
      images:[]
    };
  },
  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },
  render: function(){
    return <div>
      Welp, soon I'll show you images for topic with id #{this.props.params.id} :3
    </div>
  },
  onChange: function(event, images) {
    this.setState({
      images: images
    })
  }
});
