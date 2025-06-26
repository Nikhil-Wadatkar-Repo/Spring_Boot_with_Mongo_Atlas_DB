import axios from "axios";

export const createSectionAPI = (req) => {
  return axios.post("http://localhost:9092/createNewSection", req);
};
export const updateSectionAPI = (req) => {
  return axios.post("http://localhost:9092/updateSectionDetails", req);
};
export const deleteSectionByIdAPI = (id) => {
  return axios.get("http://localhost:9092/deleteSectionById/" + id);
};

export const callAllSectionsAPI = () => {
  return axios.get("http://localhost:9092/getAllSection");
};
export const addNewStudentToClassAPI = (reqDetails) => {
  return axios.post("http://localhost:9092/addNewStudentToClass", reqDetails);
};

export const getSectionByStandardAPI = (std) => {
  return axios.get("http://localhost:9092/getSectionByStandard/" + std);
};
export const callStudDetailsByClassId = (unid) => {
  return axios.get("http://localhost:9092/getAllStudentsByClassId/" + unid);
};
export const getAllStudentsByStdSection = (std, section) => {
  return axios.get(
    "http://localhost:9092/getAllStudentsByStdSection/" + std + "/" + section
  );
};

export const getAllExamNonMappedStudentsByStdSectionAPI = (std, section) => {
  return axios.get(
    "http://localhost:9092/getAllExamNonMappedStudentsByStdSection/" +
      std +
      "/" +
      section
  );
};
