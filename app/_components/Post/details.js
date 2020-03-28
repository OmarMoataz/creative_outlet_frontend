import React from 'react';

const PostDetails = props => {
  const { post } = props;

  if (post) {
    return (
      <div>
        <div> {post.title} </div>
        <div> {post.description} </div>
      </div>
    );
  } else {
    return <div> Please choose a post to read. </div>
  }
};

export default PostDetails;
