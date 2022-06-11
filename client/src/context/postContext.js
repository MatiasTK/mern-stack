import {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { getPostsRequests, createPostRequest, deletePostRequest } from '../api/posts';

/* Contextos: Son estados globales que pueden usar muchos componentes. */
const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };

  const createPost = async (post) => {
    const res = await createPostRequest(post);
    setPosts([...posts, res.data]);
  };

  const deletePost = async (post) => {
    await deletePostRequest(post);
    getPosts();
  };

  // To fix linter error.
  const memo = useMemo(() => ({
    posts, setPosts, getPosts, createPost, deletePost,
  }), [posts]);

  return (
    <postContext.Provider
      value={memo}
    >
      {children}
    </postContext.Provider>
  );
}

// To fix linter error.
PostProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
