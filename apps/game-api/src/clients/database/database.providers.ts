import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'postgres',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'user',
        password: 'Pa$$w0rd',
        database: 'wizemoon',
        entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
        synchronize: true,
      }),
  },
];
