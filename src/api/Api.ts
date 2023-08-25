import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const createData = async (formData) => {
  return await api.post(`/api/v1/User/Register/`, formData);
};

export const signInData = async (loginData) => {
  return await api.post(`/api/v1/User/Login/`, loginData)
};

export const uploadFile = async (fileData) => {
  return await api.post(`api/v1/Document/`, fileData)
}