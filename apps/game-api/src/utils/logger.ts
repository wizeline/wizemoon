import pino from 'pino';
import pretty from 'pino-pretty';

const logger =
  process.env.APP_ENV === 'local'
    ? pino(
        pretty({
          colorize: true,
          ignore: 'pid,hostname',
          translateTime: true,
        })
      )
    : pino();

export default logger;
