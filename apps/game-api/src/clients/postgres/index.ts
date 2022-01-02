import { createConnection } from 'typeorm';
import logger from '../../utils/logger';

async function connectToDB() {
  return createConnection({
    name: 'game-api',
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT || 3000),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  });
}

export async function waitForDBConnection(func: (dbConnection) => void) {
  try {
    const connection = await connectToDB();
    func(connection);
  } catch (error) {
    logger.error(error);
  }
}
