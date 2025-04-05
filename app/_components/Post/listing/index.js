import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";

import requester from "helpers/requester";
import PostCard from "shared-components/cards/postCard";
import FooterInfo from "shared-components/FooterInfo";

import "./styles.css";

const PostListing = (props) => {
  const { onClickPost, onSetDefaultPost } = props;
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const perPage = 10;

  useEffect(() => {
    if (page === 1 && posts?.length > 0) onSetDefaultPost(posts[0]);
  }, [posts, page]);

  const getPosts = async () => {
    if (hasMore) {
      try {
        setIsLoading(true);
        const response = await requester({
          method: "GET",
          url: `/posts?page=${page}&per_page=${perPage}`,
        });
        if (
          posts.length + response.data.data.length ==
          response.data.meta.totalCount
        ) {
          setHasMore(false);
        }
        setPosts([...posts, ...response.data.data]);
        setPage(page + 1);
      } catch (e) {
        setIsError(true);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="listing__scrollable-div mt-4">
      {posts.map((post) => (
        <div key={post.id}>
          <button
            className="listing-item__wrap hover:bg-teal-200 rounded-full"
            onClick={() => onClickPost(post)}
          >
            <PostCard post={post} />
          </button>
        </div>
      ))}
      <Waypoint onEnter={getPosts} threshold={0} />
      {isLoading && <FooterInfo content="Loading..." />}
      {isError && <FooterInfo content="Error loading remaining data" />}
      {!hasMore && <FooterInfo content="No more articles to show" />}
    </div>
  );
};

export default PostListing;
