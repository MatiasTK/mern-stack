import axios from 'axios';

export function getPostsRequests() {
  return axios.get('/posts');
}

export function createPostRequest(post) {
  return axios.post('/posts', post);
}
