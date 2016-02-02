var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Actions = require('../actions')
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var ImageUpload = require('./image-upload');

module.exports = React.createClass({
  mixins:[Reflux.listenTo(TopicStore,"onChange")],
  getInitialState: function() {
    return {
      topics:[]
    };
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Browser
        </Link>
        <ul className="nav navbar-nav navbar-right">
          {this.renderTopics()}
        </ul>
        <ul className="nav navbar-nav navbar-left">
          <ImageUpload/>
        </ul>
      </div>
    </nav>
  },
  renderTopics: function() {
    return this.state.topics.slice(0,4).map(function(topic) {
      return <li key={topic.id}>
        <Link to={"topics/"+topic.id} activeClassName="active">
          {topic.name}
        </Link>
      </li>
    })
  },
  onChange: function(event,topics) {
    this.setState({
      topics:topics
    })
  }
})
