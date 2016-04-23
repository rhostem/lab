import React from 'react';
import CommentBox from './comment-box';
import Comment from './comment';


var CommentList = React.createClass({
  componentDidMount: function() {

    },
  render: function() {
      // 데이터 배열을 이용해서 컴포넌트 구성
      var commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment key={comment.id} author={comment.author}>
            {comment.text}
          </Comment>
        );
      });

      return (
        <div className="comment-list">
          {commentNodes}
        </div>
      );
    }
});

export default CommentList;

