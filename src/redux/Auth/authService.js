import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
export const serviceSignIn = async (value) => {
  const postData = async () => {
    const response = await axios
      .post(
        `${baseUrl}auth/login`,
        {
          email: value.email,
          password: value.password,
        },
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        throw error.response.data.message;
      });

    return response;
  };
  return await postData();
};

export const serviceSignUp = async (value) => {
  const postData = async () => {
    const response = await axios
      .post(
        `${baseUrl}auth/regiter`,
        {
          email: value.email,
          password: value.password,
          username: value.username,
        },
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  };
  return await postData();
};
