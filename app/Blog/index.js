import React, { useState, useEffect } from "react";

import { Formik, Field, Form } from "formik";

import useHttp from "../_services/useHttp";

import "./styles.css";

const Blog = (props) => {
  const [articleData, setArticleData] = useState(null);
  const [response, error, isLoading] = useHttp({
    method: "POST",
    url: "/posts",
    data: articleData,
    isDelayedRequest: true
  })

  useEffect(() => {
    if (response) {
      const articleId = response.data.id;
      props.history.push(`/${articleId}`);
    }
  }, [response]);
  
  const publishArticle = async (values) => {
    let articleFormData = new FormData();

    try {
      articleFormData.set("content", values.content);
      articleFormData.set("title", values.title);
      articleFormData.set("description", values.description);
      articleFormData.set("thumbnail", values.thumbnail);

      setArticleData(articleFormData); // triggers the request.
    } catch (e) {
      console.log(`Something went wrong while creating article! ${e}`);
    }
  };

  return (
    <div className="m-4">
      <Formik
        initialValues={{ title: "", content: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Post must have a title.";
          } else if (!values.content) {
            errors.content = "Post must have some content.";
          }
          return errors;
        }}
        onSubmit={(values) => {
          publishArticle(values);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="create-article">
            <h1 className="create-article__lbl"> Create Article </h1>
            <button
              className="create-article__publish-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Publish
            </button>
            <div className="create-article__item">
              <h2 className="create-article__item-lbl"> Article Title </h2>
              <Field
                className="create-article__title border block"
                name="title"
              />
            </div>
            <div className="create-article__item">
              <h2 className="create-article__item-lbl">
                {" "}
                Article Description{" "}
              </h2>
              <Field
                className="create-article__description border block"
                name="description"
              />
            </div>
            <div className="create-article__item">
              <h2 className="create-article__item-lbl"> Article Thumbnail </h2>
              <input
                id="thumbnail"
                name="thumbnail"
                type="file"
                onChange={(event) => {
                  setFieldValue("thumbnail", event.currentTarget.files[0]);
                }}
              />
            </div>
            <div className="create-article__item">
              <h2 className="create-article__item-lbl"> Article Content </h2>
              <Field
                component="textarea"
                className="create-article__content border"
                name="content"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Blog;
