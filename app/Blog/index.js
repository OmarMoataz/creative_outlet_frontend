import React from "react";

import { Formik, Field, Form } from "formik";
import requester from "../_helpers/requester";

import "./styles.css";

const Blog = (props) => {
  const publishArticle = async (values) => {
    let articleData = new FormData();
    try {
      articleData.set("content", values.content);
      articleData.set("title", values.title);
      articleData.set("description", values.description);
      const response = await requester({
        method: "POST",
        url: "/posts",
        data: articleData
      });
      const articleId = response.data.id;
      props.history.push(`/${articleId}`);
    } catch (e) {
      // do something.
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
        {({ isSubmitting }) => (
          <Form className="create-article">
            <h1 className="create-article__label"> Create Article </h1>
            <button
              className="create-article__publish-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Publish
            </button>
            <div className="create-article__item">
              <h2> Article Title </h2>
              <Field
                className="create-article__title border block"
                name="title"
              />
            </div>
            <div className="create-article__item">
              <h2> Article Description </h2>
              <Field
                className="create-article__description border block"
                name="description"
              />
            </div>
            <div className="create-article__item">
              <h2> Article Content </h2>
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
