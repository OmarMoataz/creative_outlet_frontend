import axios from "axios";
import apiConfig from "config";
import { authenticationService } from "services/authenticationService";

const requester = config => {
  const url = `${apiConfig.apiUrl}${config.url}`;
  const configWithToken = {
    ...config,
    url,
    headers: {
      'Authorization': `bearer ${authenticationService.currentUserValue().token}`
    }
  };

  return axios(configWithToken);
};

export default requester;
