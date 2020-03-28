import React from 'react';

const PostDetails = props => {
  const { post } = props;

  if (post) {
    return (
      <React.Fragment>
        <div> {post.title} </div>
        <div> {post.description} </div>
      </React.Fragment>
    );
  } else {
    return <div> Please choose a post to read. </div>
  }
};

export default PostDetails;
