import express from 'express';
import fileupload from 'express-fileupload';
import postRoutes from './routes/posts.routes.js';
import { PORT } from './config.js';

export default function startExpress() {
  const app = express();

  app.use(express.json());
  app.use(fileupload({ useTempFiles: true, tempFileDir: './uploads' }));

  app.use(postRoutes);

  app.listen(PORT || 5000, () => {
    console.log(`Server is running on port: ${PORT || 5000}`);
  });
}
