import {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import getPostsRequests from '../api/posts';

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

  // To fix linter error.
  const memo = useMemo(() => ({ posts, setPosts, getPosts }), [posts]);

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
