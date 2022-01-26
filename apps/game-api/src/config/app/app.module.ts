import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonsModule } from '../../endpoints/pokemons/pokemons.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const APP_ENV = process.env.APP_ENV || 'local';

import { DatabaseProviderModule } from '../../providers/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${APP_ENV}`,
    }),
    DatabaseProviderModule,
    PokemonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
