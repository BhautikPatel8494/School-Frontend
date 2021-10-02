import axios from "axios";
import { tokenLogin } from "../component/constant";

const api = axios.create({
  baseURL: "http://192.168.29.6:8000/",
});

export const seprateUserInfo = async (request) => {
  const tokenLoginTest = sessionStorage.getItem("token");
  return await api.request({
    url: request.url,
    headers: { Authorization: `${tokenLoginTest}` },
  });
};

export const historyResponse = async (request) => {
  return await api.request({
    url: request.url,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const getExamQuestion = async (request,examId) => {
  return await api.request({
    url: request.url,
    examId,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const userHistory = async (request) => {
  return await api.request({
    url: request.url,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const mcqResponse = async (request) => {
  return await api.request({
    url: request.url,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const singleUserInfo = async (request) => {
  return await api.request({
    url: request.url,
    headers: { Authorization: ` ${tokenLogin}` },
  });
};

export const getExamSubject = async (request) => {
    return await api.request({
        url: request.url,
        headers: { Authorization: `Bearer ${tokenLogin}` },
    })
}

export const studentAdmission = async (request, data) => {
  return await api.request({
    method: "POST",
    url: request.url,
    data,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const addSubjectName = async (request, data) => {
  return await api.request({
    method: "POST",
    url: request.url,
    data,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const giveExam = async (request, data) => {
  return await api.request({
    method: "POST",
    url: request.url,
    data,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const loginTeacher = async (request, data) => {
  return await api.request({
    method: "POST",
    url: request.url,
    data,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const loginStudent = async (request, data) => {
  return await api.request({
    method: "POST",
    url: request.url,
    data,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};
export const questionAdd = async (request, data) => {
  return await api.request({
    method: "POST",
    url: request.url,
    data,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};

export const registerNew = async (request, data) => {
  return await api.request({
    method: "POST",
    url: request.url,
    data,
  });
};

export const deleteMcqQuestion = async (request) => {
  return await api.request({
    method: "DELETE",
    url: request.url,
    headers: { Authorization: `Bearer ${tokenLogin}` },
  });
};
