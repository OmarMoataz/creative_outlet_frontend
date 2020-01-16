import React, { useState, useEffect } from "react";
import { authenticationService } from "../_services/authenticationService";
import requester from "helpers/requester";

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
    <div className="bg-white">
      {posts.map(post => {
        return <div> {post.title} </div>;
      })}
    </div>
  );
};

export default HomePage;
