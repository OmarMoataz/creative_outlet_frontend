import React from "react";

const PostCard = props => {
  const { title, description, user } = props.post;

  return (
    <div className="p-3">
      <div className="inline-block">
        <img className="w-10 rounded-full" src={user.profileImageUrl} />
      </div>
      <div className="inline-block ml-3">
        <h3> {title} </h3>
        <p className="text-gray-600 text-sm"> {description} </p>
      </div>
    </div>
  );
};

export default PostCard;
