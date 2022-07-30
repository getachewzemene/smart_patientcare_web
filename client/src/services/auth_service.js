import axios from "axios";
import { BASE_URL } from "./api_endpoint";
const register = async (username, email, password) => {
  return await axios.post(BASE_URL + "signup", {
    username,
    email,
    password,
  });
};
const login = async (email, password, pathname) => {
  console.log(email, password, pathname);
  return await axios
    .post(BASE_URL + pathname, {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data.accessToken);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      // console.log(response.data);
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;
