import { Schema } from 'mongoose';

export const ProfileSchema = new Schema({
  username: String,
  horoscope: String,
  zodiac: String,
  // Tambahkan field lain sesuai kebutuhan
});