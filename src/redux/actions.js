import axios from 'axios';
import { AUTHOR_NAME, AUTH_ID, POST_CREATED, POST_RECEIVED, USER_AUTH, USER_RECEIVED, POST_UPDATED, POST_DELETE } from './actionTypes';

const _URL = 'https://jsonplaceholder.typicode.com';

export const userReceived = () => (dispatch) => {
   axios.get(`${_URL}/users`).then((res) => dispatch({ type: USER_RECEIVED, payload: res.data }));
};

export const userAuth = (bool) => (dispatch) => {
   dispatch({ type: USER_AUTH, payload: bool });
};

export const postReceived = () => (dispatch) => {
   axios.get(`${_URL}/posts`).then((res) => dispatch({ type: POST_RECEIVED, payload: res.data }));
};

export const postCreated = (newPost) => (dispatch) => {
   axios.post(`${_URL}/posts`, newPost).then((res) => dispatch({ type: POST_CREATED, payload: res.data }));
};

export const authID = (ID) => (dispatch) => {
   dispatch({ type: AUTH_ID, payload: ID });
};

export const authorName = (ID) => (dispatch) => {
   dispatch({ type: AUTHOR_NAME, payload: ID });
};

export const postUpdated = (newPost , id) => (dispatch) => {
   axios.put(`${_URL}/posts/${id}`, newPost).then((res) => dispatch({ type: POST_UPDATED, payload: res.data }));
};
