/* eslint-disable no-underscore-dangle */
import Proptypes from 'prop-types';
import toast from 'react-hot-toast';
import { usePosts } from '../context/postContext';

export default function PostCard({ post }) {
  const { deletePost } = usePosts();

  const handleDelete = (_id) => {
    toast((t) => (
      <div className="text-white">
        <p>
          Do you want to delete?
          <strong>{_id}</strong>
        </p>
        <div>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
            onClick={() => {
              deletePost(post);
              toast.dismiss(t.id);
            }}
          >
            Delete
          </button>
          <button type="button" className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2 text-sm" onClick={() => toast.dismiss(t.id)}>Cancel</button>
        </div>
      </div>
    ), {
      style: {
        background: '#202020',
      },
    });
  };

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
      <div className="px-4 py-7 h-full">
        <div className="flex flex-col justify-between items-center">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
        <button
          type="button"
          className="bg-red-600 text-sm px-2 py-1 rounded-sm"
          onClick={() => handleDelete(post._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: Proptypes.element.isRequired,
};
