import React from "react";

import './styles.css';

const PostCard = props => {
  const { title, description, user } = props.post;

  return (
    <div className="post-card">
      <div className="post-card__image-wrap">
        <img className="post-card__image" src={user.profileImageUrl} />
      </div>
      <div className="post-card__info-wrap">
        <h3 className="post-card__title"> {title} </h3>
        <p className="post-card__description"> {description} </p>
      </div>
    </div>
  );
};

export default PostCard;
