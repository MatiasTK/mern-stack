/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { VscEmptyWindow } from 'react-icons/vsc';
import { usePosts } from '../context/postContext';

export default function Homepage() {
  const { getPosts, posts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 text-white h-48" />
        <h1 className="text-white text-2xl">There are no posts yet</h1>
      </div>
    );
  }

  return (
    <div className="text-white">
      {posts.map((post) => (
        <div key={post._id}>
          {post.title}
        </div>
      ))}
    </div>
  );
}
