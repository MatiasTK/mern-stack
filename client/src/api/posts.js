import axios from 'axios';

export function getPostsRequests() {
  return axios.get('/posts');
}

export function createPostRequest(post) {
  const form = new FormData();

  Object.keys(post).forEach((key) => {
    form.append(key, post[key]);
  });

  return axios.post('/posts', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
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
