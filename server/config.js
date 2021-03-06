import dotenv from 'dotenv';

dotenv.config();

export const { PORT } = process.env || 4000;
export const DBURI = process.env.MONGO_URI;
export const { IMGUR_KEY } = process.env;
