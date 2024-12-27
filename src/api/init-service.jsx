import axios from "axios";

const promiseFunction = (resp) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      document
        .getElementById("infin8-spinner")
        .classList.add("page-loader-disable");
      resolve(resp);
    }, 2000);
  });

  return promise;
};

const initService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

initService.interceptors.request.use(
  (config) => {
    document
      .getElementById("infin8-spinner")
      .classList.remove("page-loader-disable");

    return config;
  },
  (error) => {
    document
      .getElementById("infin8-spinner")
      .classList.remove("page-loader-disable");
    return Promise.reject(error);
  }
);

initService.interceptors.response.use(
  async (resp) => {
    return promiseFunction(resp);
  },
  (error) => {
    document
      .getElementById("infin8-spinner")
      .classList.add("page-loader-disable");
    return Promise.reject(error);
  }
);

export default initService;
