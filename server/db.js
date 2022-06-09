import mongoose from 'mongoose';
import { DBURI } from './config.js';

export default function connectDB() {
  try {
    mongoose.connect(DBURI);
  } catch (error) {
    console.error(error);
  }
}

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected to', mongoose.connection.db.databaseName);
});
