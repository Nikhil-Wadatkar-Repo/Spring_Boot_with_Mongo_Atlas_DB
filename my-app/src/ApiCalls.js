import axios from "axios";

const uri = "http://localhost:9092/";
export const callGetUsersAPI = () => {
  return axios.get(uri + "getAllTeachers");
  // .then(response => {
  //   setData(response.data);
  // })
  // .catch(error => {
  //   console.error('There was an error fetching the data!', error);
  // });
};
export const callCreateUserAPI = (details) => {
  return axios.post(uri + "createTeacher", details);
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
export const callAllClasses = () => {
  return axios.get("http://localhost:9092/getAllClasses");
};

export const callGetAllClassesCount = () => {
  return axios.get("http://localhost:9092/getAllClassesCount");
};

export const getDistinctClasses = () => {
  return axios.get("http://localhost:9092/getDistinctClasses");
};

export const callAllTeachers = () => {
  return axios.get("http://localhost:9092/getAllTeachers");
};
export const saveClassAPI = (reqDetails) => {
  return axios.post("http://localhost:9092/createClass", reqDetails);
};

export const getStudentByIdAPI = (studentID) => {
  return axios.get("http://localhost:9092/getStudentsById/" + studentID);
};

export const getDistinctYearsAPI = () => {
  return axios.get("http://localhost:9092/getDistinctYears");
};
export const getSectionYearByStandardAPI = (std) => {
  return axios.get("http://localhost:9092/getSectionByStandard/" + std);
};

export const getDistinctStandardAPI = () => {
  return axios.get("http://localhost:9092/getDistinctStandards");
};

export const callSectionAPI = (req) => {
  return axios.post("http://localhost:9092/getFilteredStudent", req);
};

export const updateStudentAPI = (req) => {
  return axios.post("http://localhost:9092/updateStudent", req);
};
export const createStudentAPI = (req) => {
  return axios.post("http://localhost:9092/createStudent", req);
};

export const getAllSubjectsAPI = () => {
  return axios.get("http://localhost:9092/subjectList");
};
export const getAllExamListAPI = () => {
  return axios.get("http://localhost:9092/examList");
};

export const assignExamAPI = (req) => {
  return axios.post("http://localhost:9092/assignExam", req);
};
export const getStudentsAPI = () => {
  return axios.get("http://localhost:9092/getStudents");
};

export const getExamDetailsByStudentIdAPI = (id) => {
  return axios.get("http://localhost:9092/getExamDetailsByStudentId/" + id);
};

export const getExamDetailsByExamIdAPI = (id) => {
  return axios.get("http://localhost:9092/getExamDetailsByExamId/" + id);
};

export const getAllExamDetailsAPI = () => {
  return axios.get("http://localhost:9092/getAllExamDetails");
};

export const updateExamDetailsAPI = (req) => {
  return axios.post("http://localhost:9092/updateExamDetails", req);
};

export const studentsByStdSectionAPI = (std, section) => {
  return axios.get(
    "http://localhost:9092/getStudentByStdSection/" + std + "/" + section
  );
};
