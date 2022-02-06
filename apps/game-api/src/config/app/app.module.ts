import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const APP_ENV = process.env.APP_ENV || 'local';

import { DatabaseProviderModule } from '../../providers/database.module';
import { HealthModule } from '../../endpoints/health/health.module';
import { PokemonsModule } from '../../endpoints/pokemons/pokemons.module';
import { OrdersModule } from '../../endpoints/orders/orders.module';
import { NftItemsModule } from '../../endpoints/nft-items/nft-items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${APP_ENV}`,
    }),
    DatabaseProviderModule,
    PokemonsModule,
    OrdersModule,
    NftItemsModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
