import pkg from 'imgur';
import fs from 'fs';
import { IMGUR_KEY } from '../config.js';

const { ImgurClient } = pkg;
const client = new ImgurClient({ clientId: IMGUR_KEY });

export default async function imageUpload(imagePath, imageTitle, imageDescription) {
  const res = await client.upload({
    image: fs.createReadStream(imagePath),
    type: 'stream',
    title: imageTitle,
    description: imageDescription,
  });
  return res;
}
