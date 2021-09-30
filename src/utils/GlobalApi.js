import axios from 'axios';
import { tokenLogin } from '../component/constant';

const api = axios.create({
    baseURL: 'http://192.168.29.6:8000/'
})

export const seprateUserInfo = async (request) => {
    return await api.request({
        url: request.url,
        headers: { Authorization: `${tokenLogin}` },
    });
}

export const historyResponse = async (request) => {
    return await api.request({
        url: request.url,
        headers: { Authorization: `Bearer ${tokenLogin}` },
    });
}

export const getExamQuestion = async (request) => {
    return await api.request({
        url: request.url,
        headers: { Authorization: `Bearer ${tokenLogin}` },
    });
}

export const userHistory = async (request) => {
    return await api.request({
        url: request.url,
        headers: { Authorization: `Bearer ${tokenLogin}` },
    });
}

export const mcqResponse = async (request) => {
    return await api.request({
        url: request.url,
        headers: { Authorization: `Bearer ${tokenLogin}`}
    })
}