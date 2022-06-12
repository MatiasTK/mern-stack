import Proptypes from 'prop-types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../context/postContext';

export default function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

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
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && e.target.type !== 'button') {
          navigate(`/posts/${post._id}`);
        }
      }}
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer h-96"
      onClick={(e) => {
        // Avoid aplying it to delete button
        if (e.target.type !== 'button') {
          navigate(`/posts/${post._id}`);
        }
      }}
    >
      <div className="px-4 py-4 h-full">
        <div className="mb-4 min-h-[80%]">
          <div className="flex flex-col justify-between items-center">
            <h3 className="font-bold text-lg mb-4">{post.title}</h3>
            <p className="mb-4">{post.description}</p>
          </div>
          {post.image && <img src={post.image.url} alt="Imagen del post" />}
        </div>
        <button
          type="button"
          className="bg-red-600 text-sm px-2 py-1 rounded-sm w-full mb-2"
          onClick={() => handleDelete(post._id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleDelete(post._id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: Proptypes.shape({
    title: Proptypes.string,
    description: Proptypes.string,
    _id: Proptypes.string,
    image: Proptypes.shape({
      url: Proptypes.string,
      public_id: Proptypes.string,
    }),
    __v: Proptypes.number,
  }).isRequired,
};
