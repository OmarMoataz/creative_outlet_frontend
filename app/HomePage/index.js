import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import PostListing from "../_components/Post/listing";
import PostDetails from "../_components/Post/details";

const HomePage = (props) => {
  const [activePost, setActivePost] = useState(null);

  const handleClickPost = (post) => {
    setActivePost(post);
    if (window.outerWidth < 992) {
      props.history.push(`${post.id}`);
    }
  };

  const handleSetDefaultPost = (post) => {
    setActivePost(post);
  };

  return (
    <div className="bg-white homepage__container">
      <PostListing
        onClickPost={handleClickPost}
        onSetDefaultPost={handleSetDefaultPost}
      />
      {window.outerWidth >= 992 && <PostDetails post={activePost} />}
    </div>
  );
};

export default withRouter(HomePage);
