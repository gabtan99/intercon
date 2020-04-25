import axios from "axios";

export const signupNewsletter = (email) => {
  const url = "https://api.convertkit.com/v3/forms/1345204/subscribe";
  const api_key = "VBs6xqJwXE3uI4Xjauz1pQ";
  const params = { api_key, email };

  return axios.post(url, params, {
    headers: {
      "content-type": "application/json",
    },
  });
};
