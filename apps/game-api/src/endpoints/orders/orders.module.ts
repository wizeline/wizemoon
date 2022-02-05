import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { PokemonsModule } from '../pokemons/pokemons.module';
import { NftContractModule } from '../../providers/ntf.contract.module';
import { PaymentModule } from '../../providers/payment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    PokemonsModule,
    NftContractModule,
    PaymentModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [TypeOrmModule],
})
export class OrdersModule {}
