/* eslint-disable no-underscore-dangle */
import axios from 'axios';

export function getPostsRequests() {
  return axios.get('/posts');
}

export function createPostRequest(post) {
  return axios.post('/posts', post);
}

export function deletePostRequest(post) {
  return axios.delete(`/posts/${post._id}`);
}
