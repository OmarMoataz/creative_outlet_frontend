import React from "react";

import useHttp from "shared-components/CustomHooks/useHttp";
import PostDetails from "../_components/Post/details";
import FooterInfo from "../_components/FooterInfo";

import { useParams } from "react-router-dom";

const ArticleDetailsPage = (props) => {
  if (props.article) {
    return <PostDetails post={article} />;
  } else {
    const { id } = useParams();
    const [response, error, isLoading] = useHttp({
      url: `/posts/${id}`,
      method: "GET"
    });

    if (isLoading) return <FooterInfo content="Loading article..." />;
    else if (error) return <FooterInfo content="Error loading post" />;
    else return <PostDetails post={response && response.data} />;
  }
};

export default ArticleDetailsPage;
