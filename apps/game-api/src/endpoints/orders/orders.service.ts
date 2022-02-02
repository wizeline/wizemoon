import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Pokemon } from '../pokemons/entities/pokemon.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const orderEntity = Order.fromDto(createOrderDto);
    // TODO: Verify the transaction before assign owner.
    return getManager().transaction(async (transactionManager) => {
      await transactionManager.insert(Order, orderEntity);
      await transactionManager.update(Pokemon, createOrderDto.pokemonId, {
        owner: createOrderDto.fromAddress,
      });
    });
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOne(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
