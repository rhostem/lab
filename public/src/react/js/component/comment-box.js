import React from 'react';
import $ from 'jquery';

import CommentList from './comment-list';

var commentData = [
  { id: 1, author: 'Pete Hunt', text: '(data from prop) This is one comment' },
  { id: 2, author: 'Jordan Walke', text: '(data from prop) This is *another* comment' }
];

var CommentBox = React.createClass({

  getInitialState: function() {
    return { data: [] };
  },

  componentDidMount: function() {
    // 최초의 render가 끝난 후 state를 업데이트
    $.ajax({
      dataType: 'json',
      url: '/data/commentData.json',
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString(), xhr.status);
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="comment-box">
        <h1>comments</h1>
        <CommentList data={this.state.data}/>
      </div>
    );
    // <CommentList data={commentData}/>
  }
});

export default CommentBox;
