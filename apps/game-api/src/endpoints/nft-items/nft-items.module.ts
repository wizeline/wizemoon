import { Module } from '@nestjs/common';
import { NftItemsService } from './nft-items.service';
import { NftItemsController } from './nft-items.controller';
import { NftContractModule } from '../../providers/ntf.contract.module';

@Module({
  imports: [NftContractModule],
  controllers: [NftItemsController],
  providers: [NftItemsService],
})
export class NftItemsModule {}
