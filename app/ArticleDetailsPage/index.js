import React, { useEffect, useState } from "react";

import requester from "helpers/requester";
import PostDetails from "../_components/Post/details";
import FooterInfo from "../_components/FooterInfo";

import { useParams } from "react-router-dom";

const ArticleDetailsPage = (props) => {
  const [article, setArticle] = useState(props.article);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const articleDetailsAPI = `/posts/${id}`;

      const response = await requester({
        method: "GET",
        url: articleDetailsAPI
      });

      setArticle(response.data);
      setIsLoading(false);
    };
    getData(id);
  }, []);

  if (!isLoading) return <PostDetails post={article} />;
  else return <FooterInfo content="Loading article..." />;
};

export default ArticleDetailsPage;
