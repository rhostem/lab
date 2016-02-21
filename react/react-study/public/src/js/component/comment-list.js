import React from 'react'
import CommentBox from './comment-box'
import Comment from './comment'

var CommentList = React.createClass({
    render: function(){
      return (
        <div className="comment-list">
          <h1> Comment List </h1>
          <Comment author="Pete Hunt">This is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment</Comment>
        </div>
      );
    }
});

export default CommentList;

