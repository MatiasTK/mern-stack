/* eslint-disable no-underscore-dangle */
import express from 'express';
import fileupload from 'express-fileupload';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import postRoutes from './routes/posts.routes.js';
import { PORT } from './config.js';

export default function startExpress() {
  const app = express();
  // Manual __dir
  const __dirname = dirname(fileURLToPath(import.meta.url));

  app.use(express.json());
  app.use(fileupload({ useTempFiles: true, tempFileDir: './uploads' }));

  app.use(postRoutes);

  app.use(express.static(join(__dirname, '../client/build')));

  app.listen(PORT || 4000, () => {
    console.log(`Server is running on port: ${PORT || 4000}`);
  });
}
