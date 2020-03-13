import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Formik, Field, Form, ErrorMessage } from "formik";
import requester from "../_helpers/requester";

const Blog = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const publishPost = async values => {
    let postData = new FormData();
    postData.set("content", values.content);
    postData.set("title", values.title);
    const response = await requester({
      method: "POST",
      url: "/posts",
      data: postData
    });
  };

  return (
    <div className="m-4">
      <Formik
        initialValues={{ title: "", content: "" }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = "Post must have a title.";
          } else if (!values.content) {
            errors.content = "Post must have some content.";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          publishPost(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field className="border block" name="title" />
            <Field className="border block" name="content" />
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
            <button
              className="border p-1 my-1"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Blog;
