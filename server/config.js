import dotenv from 'dotenv';

dotenv.config();

export const { PORT } = process.env;
export const DBURI = process.env.MONGO_URI;
