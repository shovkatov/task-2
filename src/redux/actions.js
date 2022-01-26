import axios from 'axios';
import { POST_CREATED, POST_RECEIVED, USER_AUTH, USER_RECEIVED } from './actionTypes';

const _URL = 'https://jsonplaceholder.typicode.com';

export const userReceived = () => (dispatch) => {
   axios.get(`${_URL}/users`).then((res) => dispatch({ type: USER_RECEIVED, payload: res.data }));
};

export const userAuth = () => (dispatch) => {
   dispatch({ type: USER_AUTH, payload: true });
};

export const postReceived = () => (dispatch) => {
   axios.get(`${_URL}/posts`).then((res) => dispatch({ type: POST_RECEIVED, payload: res.data }));
};

export const postCreated = (newPost) => (dispatch) => {
   axios.post(`${_URL}/posts`, newPost).then((res) => dispatch({ type: POST_CREATED }));
};
