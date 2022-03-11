import React from 'react';

import './styles.css';

const PostDetails = props => {
  const { post } = props;

  if (post) {
    return (
      <div className="post">
        {post.title && <div className="post__title"> {post.title} </div>}
        {post.description && <div className="post__desc"> {post.description} </div>}
        {post.thumbnailUrl && <img className="post__thumbnail" src={post.thumbnailUrl} />}
        <div className="post__content"> {post.content} </div>
      </div>
    );
  }
  return <div className='centered'> <div className='big-font'> You might wanna choose an article from the left. </div>  </div>
};

export default PostDetails;
