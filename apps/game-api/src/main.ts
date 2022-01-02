import './utils/load-env';
import 'reflect-metadata';

import app from './app';
import { waitForDBConnection } from './clients/postgres';
import logger from './utils/logger';

const port = process.env.PORT || 3333;
waitForDBConnection(() => {
  app
    .listen(port, () => {
      logger.info(`Listening at http://localhost:${port}/health`);
    })
    .on('error', console.error);
});
