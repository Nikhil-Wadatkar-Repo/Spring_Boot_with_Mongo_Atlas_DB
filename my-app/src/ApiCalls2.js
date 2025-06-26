import axios from "axios";

const uri = "http://localhost:9090/";
export const getAllClassAPI = () => {
  return axios.get(uri + "getAllClass");
};
export const deleteClassAPI = (id) => {
  return axios.get(uri + "deleteClass/" + id);
};
export const callCreateClassAPI = (details) => {
  return axios.post(uri + "createClass", details);
};
export const callUpdateUserAPI = () => {
  return axios.put("https://jsonplaceholder.typicode.com/posts/1", {});
};
