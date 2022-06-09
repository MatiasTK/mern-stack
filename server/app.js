import express from 'express';
import postRoutes from './routes/posts.routes.js';
import { PORT } from './config.js';

export default function startExpress() {
  const app = express();

  app.use(express.json());

  app.use(postRoutes);

  app.listen(PORT || 5000, () => {
    console.log(`Server is running on port: ${PORT || 5000}`);
  });
}
