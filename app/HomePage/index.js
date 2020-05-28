import React, { useState } from "react";
import { withRouter } from 'react-router-dom';

import PostListing from "../_components/Post/listing";
import PostDetails from "../_components/Post/details";
import ArticleDetailsPage from "../ArticleDetailsPage";

const HomePage = (props) => {
  const [activePost, setActivePost] = useState(null);
  const handleClickPost = (post) => {
    setActivePost(post);
    if (window.outerWidth < 992) {
      props.history.push(`${post.id}`);
    }
  }
  
  return (
    <div className="bg-white homepage__container">
      <PostListing onClickPost={handleClickPost}/>
      {window.outerWidth >= 992 && <PostDetails post={activePost}/>}
    </div>
  )
};

export default withRouter(HomePage);
