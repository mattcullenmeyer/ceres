import express, { Application, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/api';
import config from '../config/config';
import log from '../config/logging';

const app: Application = express();

/** Parse the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Rules of our API */
app.use(cors());

/** Routes */
app.use('/api/v1', apiRoutes);

/** Error Handling */
app.use((_, res: Response) => {
  const error = new Error('Route not found');

  return res.status(404).json({
    message: error.message
  });
})

/** Server */
const PORT = config.PORT as number;
const HOST = config.HOST as string;
app.listen(PORT, HOST, () => {
  log.info(`Server running on http://${HOST}:${PORT}`)
});

// if node server is running in the background,
// interupt it with the following
// $ lsof -i :5000
// $ kill -9 PROCESS_ID
