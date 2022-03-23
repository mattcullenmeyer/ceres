import express, { Application, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { error404 } from './utils/errorResponses';
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
const { status, data } = error404.error404;
app.use((_, res: Response) => {
  return res.status(status).json(data);
});

/** Server */

// if node server is running in the background,
// interupt it with the following
// $ lsof -i :5000
// $ kill -9 PROCESS_ID

const PORT = config.PORT as number;
const HOST = config.HOST as string;
app.listen(PORT, HOST, () => {
  log.info(`Server running on http://${HOST}:${PORT}`);
});
