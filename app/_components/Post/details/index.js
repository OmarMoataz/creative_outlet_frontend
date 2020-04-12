import React from 'react';

const PostDetails = props => {
  const { post } = props;

  if (post) {
    return (
      <div class="post">
        <div class="post__title"> {post.title} </div>
        <div class="post__desc"> {post.description} </div>
        <div class="post__content"> {post.content} </div>
      </div>
    );
  } else {
    return <div> Please choose a post to read. </div>
  }
};

export default PostDetails;
