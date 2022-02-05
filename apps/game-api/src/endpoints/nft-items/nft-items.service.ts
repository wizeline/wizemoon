import { Injectable } from '@nestjs/common';
import { CreateNftItemDto } from './dto/create-nft-item.dto';
import { UpdateNftItemDto } from './dto/update-nft-item.dto';

@Injectable()
export class NftItemsService {
  create(createNftItemDto: CreateNftItemDto) {
    return 'This action adds a new nftItem';
  }

  findAll() {
    return `This action returns all nftItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nftItem`;
  }

  update(id: number, updateNftItemDto: UpdateNftItemDto) {
    return `This action updates a #${id} nftItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} nftItem`;
  }
}
