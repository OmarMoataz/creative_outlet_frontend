import React from 'react';

import './styles.css';

const PostDetails = props => {
  const { post } = props;

  if (post) {
    return (
      <div className="post">
        <div className="post__title"> {post.title} </div>
        <div className="post__desc"> {post.description} </div>
        <div className="post__content"> {post.content} </div>
      </div>
    );
  } else {
    return <div> Please choose a post to read. </div>
  }
};

export default PostDetails;
