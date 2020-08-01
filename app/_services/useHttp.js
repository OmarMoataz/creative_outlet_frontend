import { useState, useEffect } from "react";

import requester from "../_helpers/requester";

const useHttp = (props) => {
  const { url, method, data, isDelayedRequest } = props;

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      triggerRequest();
    }
  }, [data]);

  useEffect(() => {
    if (!isDelayedRequest) {
      triggerRequest();
    }
  }, []);

  const triggerRequest = async () => {
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
  };

  return [response, error, isLoading];
};

export default useHttp;
