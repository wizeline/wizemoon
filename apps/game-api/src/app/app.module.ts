import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { Pokemon } from '../endpoints/pokemons/entities/pokemon.entity';
import { PokemonsModule } from '../endpoints/pokemons/pokemons.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const APP_ENV = process.env.APP_ENV || 'local';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${APP_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const options = await getConnectionOptions();
        return Object.assign(options, {
          autoLoadEntities: true,
          entities: [Pokemon],
        });
      },
    }),
    PokemonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
