import http from "../api/init-service";

export const getUserList = () => http.get("/users");

export const formSubmission = async (payload) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: payload });
    }, 2000);
  });
  return promise;
};
