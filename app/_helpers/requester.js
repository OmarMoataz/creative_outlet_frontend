import axios from "axios";
import apiConfig from "config";
import { authenticationService } from "services/authenticationService";

const requester = (config, withAuth) => {
  const url = `${apiConfig.apiUrl}${config.url}`;
  let finalConfig;
  if (withAuth) {
    finalConfig = {
      ...config,
      url,
      headers: {
        'Authorization': `bearer ${authenticationService.currentUserValue().token}`
      },
    };
  } else {
    finalConfig = {
      ...config,
      url,
    }
  }

  return axios(finalConfig);
};

export default requester;
