import axios from "axios";
const uri = "http://localhost:9092/users/";
export const callGetUsersAPI = () => {
  return axios.get(uri + "getAllUsers");
  // .then(response => {
  //   setData(response.data);
  // })
  // .catch(error => {
  //   console.error('There was an error fetching the data!', error);
  // });
};
export const callCreateUserAPI = (details) => {
  return axios.post(uri + "createUser", details);
  // .then(response => {
  //   console.log('Post successful:', response.data);
  //   setNewData('');
  // })
  // .catch(error => {
  //   console.error('There was an error posting the data!', error);
  // });
};
export const callUpdateUserAPI = () => {
  return axios.put("https://jsonplaceholder.typicode.com/posts/1", {});
  // .then(response => {
  //   console.log('Put successful:', response.data);
  //   setUpdateData('');
  // })
  // .catch(error => {
  //   console.error('There was an error updating the data!', error);
  // });
};
export const saveClassAPI = (reqDetails) => {
  return axios.post(
    "http://localhost:9092/classDetails/createClass",
    reqDetails
  );
};
export const callAllClasses = () => {
  return axios.get("http://localhost:9092/getAllClasses");
};
export const callAllSections = () => {
  return axios.get("http://localhost:9092/getAllSection");
};
export const callAllStudnetUNID = (UNID) => {
  return axios.get("http://localhost:9092/getStudentsByUNID/" + UNID);
};
export const callAllTeachers = () => {
  return axios.get("http://localhost:9092/teachers/getAll");
};
export const searchNameAPI = (name) => {
  return axios.get("http://localhost:9092/getStudentsByName/" + name);
};

export const addExistedStudentToClassAPI = (reqDetails) => {
  return axios.post(
    "http://localhost:9092/addExistedStudentToClass",
    reqDetails
  );
};

export const getAllStudentsAPI = () => {
  return axios.get("http://localhost:9092/getAllStudents");
};

export const updateDeleteStudentByIdAPI = (url) => {
  return axios.get("http://localhost:9092" + url);
};
export const updateDeleteSectionByIdAPI = (url) => {
  return axios.get("http://localhost:9092" + url);
};

export const getStudentsByIdAPI = (id) => {
  return axios.get("http://localhost:9092/getStudentsById/" + id);
};
