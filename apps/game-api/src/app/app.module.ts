import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from '../endpoints/pokemons/pokemons.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const APP_ENV = process.env.APP_ENV || 'local';

import { ConnectionOptions, getConnectionOptions } from 'typeorm';

type EntitiesAndMigrationsOpts = Pick<
  ConnectionOptions,
  'entities' | 'migrations'
>;

const importAllFunctions = (
  requireContext: __WebpackModuleApi.RequireContext
) =>
  requireContext
    .keys()
    .sort()
    .map((filename) => {
      const required = requireContext(filename);
      console.log('filename: ', filename);
      return Object.keys(required).reduce((result, exportedKey) => {
        const exported = required[exportedKey];
        if (typeof exported === 'function') {
          return result.concat(exported);
        }
        return result;
      }, [] as any);
    })
    .flat();
const entitiesViaWebpack: NonNullable<EntitiesAndMigrationsOpts['entities']> =
  importAllFunctions(require.context('../../', true, /\.entity\.ts$/));

const migrationsViaWebpack: NonNullable<
  EntitiesAndMigrationsOpts['migrations']
> = importAllFunctions(
  require.context('../migrations/database', true, /\.ts$/)
);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${APP_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const options = await getConnectionOptions();
        console.log(options);
        return Object.assign(options, {
          entities: entitiesViaWebpack,
          migrations: migrationsViaWebpack,
        });
      },
    }),
    PokemonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
