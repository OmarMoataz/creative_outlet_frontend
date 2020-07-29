import React, { useState } from "react";

import requester from "../_helpers/requester";

const useHttp = (props) => {
  const { url, method } = props;

  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  

  const triggerRequest = async (data) => {
    setLoading(true);
    try {
      setLoading(true);
      const responseData = await requester({
        method,
        url,
        data
      });
      setResponse(responseData);
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }

    return [response, error, isLoading];
  };

  return triggerRequest;
};

export default useHttp;
