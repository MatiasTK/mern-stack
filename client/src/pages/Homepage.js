import { useEffect } from 'react';
import { VscEmptyWindow } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { usePosts } from '../context/postContext';

export default function Homepage() {
  const { getPosts, posts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const renderMain = () => {
    if (posts.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 text-white h-48" />
          <h1 className="text-white text-2xl">There are no posts yet</h1>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    );
  };

  return (
    <div className="text-white">
      <header className="flex justify-between py-4">
        <h1 className="text-2xl text-gray-300 font-bold">
          Posts
          (
          {posts.length}
          )
        </h1>
        <Link to="/new" className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white">
          Create new Post
        </Link>
      </header>

      {renderMain()}
    </div>
  );
}
