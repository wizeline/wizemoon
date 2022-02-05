import { DynamicModule, Module } from '@nestjs/common';
import { NftContractService } from './nft.contract.service';

@Module({
  providers: [NftContractService],
  exports: [NftContractService],
})
export class NftContractModule {
  static forRoot(): DynamicModule {
    return {
      module: NftContractModule,
      providers: [NftContractService],
      exports: [NftContractService],
    };
  }
}
