import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import requester from "helpers/requester";
import PostCard from "shared-components/cards/postCard";

import "./styles.css";

const PostListing = props => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setIsLoading(true);
    const response = await requester({
      method: "GET",
      url: `/posts?page=${page}&per_page=${perPage}`
    });
    setPosts([...posts, ...response.data.data]);
    if (posts.length == response.data.meta.totalCount) {
      setHasMore(false);
    }
    setPage(page + 1);
    setIsLoading(false);
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getPosts}
      loader={<h4> Loading </h4>}
      hasMore={hasMore}
      endMessage={
        <div className="p-2 bg-gray-400 text-center">
          {" "}
          No more posts to show.{" "}
        </div>
      }
    >
      {posts.map(post => (
        <div>
          <button key={post.id} onClick={() => props.onClickPost(post)}>
            <PostCard post={post} />
          </button>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PostListing;
