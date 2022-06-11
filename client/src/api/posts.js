import axios from 'axios';

export default function getPostsRequests() {
  return axios.get('/posts');
}
