import React from "react";

const PostCard = props => {
  const { title, content, thumbnail } = props.post;

  return (
    <React.Fragment>
      <div>
        <h3> {title} </h3>
        <p> {content} </p>
      </div>
      <div>
        <img src={thumbnail} />
      </div>
    </React.Fragment>
  );
};

export default PostCard;
