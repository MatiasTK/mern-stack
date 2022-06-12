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

export function getPostRequest(id) {
  return axios.get(`/posts/${id}`);
}

export function updatePostRequest(id, newPost) {
  return axios.put(`/posts/${id}`, newPost);
}
