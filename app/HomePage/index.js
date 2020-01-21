import React, { useState, useEffect } from "react";

import requester from "helpers/requester";
import PostCard from "shared-components/cards/postCard";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await requester({
      method: "GET",
      url: "/posts"
    });
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-white container">
      {posts.map(post => {
        return <PostCard key={post.id} post={post}/>;
      })}
    </div>
  );
};

export default HomePage;
