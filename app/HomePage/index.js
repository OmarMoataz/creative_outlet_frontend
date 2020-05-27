import React, { useState } from "react";
import PostListing from "../_components/Post/listing";
import PostDetails from "../_components/Post/details";

const HomePage = () => {
  const [activePost, setActivePost] = useState(null);
  const handleClickPost = (post) => {
    setActivePost(post);
  }
  
  return (
    <div className="bg-white homepage__container">
      <PostListing onClickPost={handleClickPost}/>
      <PostDetails post={activePost}/>
    </div>
  )
};

export default HomePage;
