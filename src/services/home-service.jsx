import http from "../api/init-service";

export const getUserList = () => http.get("/users");
