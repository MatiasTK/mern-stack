import { useEffect } from 'react';
import { VscEmptyWindow } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
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

      <Link to="/new" className="text-red-700">Create new Post</Link>

      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
