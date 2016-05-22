import React from 'react';
import $ from 'jquery';

import CommentList from './comment-list';

const commentData = [
  { id: 1, author: 'Pete Hunt', text: '(data from prop) This is one comment' },
  { id: 2, author: 'Jordan Walke', text: '(data from prop) This is *another* comment' },
];

var CommentBox = React.createClass({

  getInitialState: function () {
    return { data: [] };
  },

  componentDidMount: function () {
    // 최초의 render가 끝난 후 state를 업데이트
    this.setState({ data: commentData });
  },

  render: function () {
    return (
      <div className="comment-box">
        <h1>comments</h1>
        <CommentList data={this.state.data} />
      </div>
    );
    // <CommentList data={commentData}/>
  },
});

export default CommentBox;
