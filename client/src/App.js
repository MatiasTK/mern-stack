import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { PostProvider } from './context/postContext';
import { Notfound, Postform, Homepage } from './pages';

export default function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/new" element={<Postform />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/posts/:id" element={<Postform />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}
