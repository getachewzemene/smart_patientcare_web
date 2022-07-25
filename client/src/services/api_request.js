// import axios from "axios";
// export const postRequest = async (url, payload = {}) => {
//   // console.log(url, payload);
//   const data = await axios
//     .post(url, payload)
//     .then((res) => res.data)
//     .catch((err) => console.log(err.response.data));
//   return data;
// };

// export const getRequest = async (url) => {
//   const data = await axios
//     .get(url)
//     .then((res) => res.data)
//     .catch((err) => ({ error: err.response.data }));
//   return data;
// };
// export const putRequest = async (url, payload = {}) => {
//   const data = await axios
//     .put(url, payload)
//     .then((res) => res.data)
//     .catch((err) => ({ error: err.response.data }));
//   return data;
// };
// export const deleteRequest = async (url) => {
//   const data = await axios
//     .delete(url)
//     .then((res) => res.data)
//     .catch((err) => ({ error: err.response.data }));
//   return data;
// };
