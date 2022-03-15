import dotenv from 'dotenv';

let path = __dirname;

if (process.env.NODE_ENV === 'production') {
  path += '/.env.prod';
} else if (process.env.NODE_ENV === 'development') {
  path += '/.env.dev';
} else {
  //
}

dotenv.config({ path });

export default {
  PORT: Number(process.env.PORT),
  HOST: process.env.HOST,
}