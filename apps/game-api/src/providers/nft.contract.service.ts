import { Injectable } from '@nestjs/common';

import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';
import { AbiItem } from 'web3-utils';
import wizeMoonERC20ContractABI from '../config/contracts/wizemoon-nft-token.json';

const {
  BSC_RPC_ENDPOINT = '',
  NFT_CONTRACT_ADDRESS = '',
  NFT_MINTER_ACCOUNT_PRIVATE_KEY = '',
  NFT_MINTER_ACCOUNT = '',
} = process.env;

function getWeb3Provider() {
  return new HDWalletProvider({
    privateKeys: [NFT_MINTER_ACCOUNT_PRIVATE_KEY],
    providerOrUrl: BSC_RPC_ENDPOINT,
  });
}

@Injectable()
export class NftContractService {
  contract: any;
  web3: Web3;
  constructor() {
    this.web3 = new Web3(BSC_RPC_ENDPOINT);
    this.contract = new this.web3.eth.Contract(
      wizeMoonERC20ContractABI as unknown as AbiItem[],
      NFT_CONTRACT_ADDRESS
    );
    this.contract.setProvider(getWeb3Provider());
  }

  async mintNFT(receiver: string, itemUrl: string) {
    return this.contract.methods.safeMint(receiver, itemUrl).send({
      from: NFT_MINTER_ACCOUNT,
    });
  }

  async getNFTBalance(address: string) {
    return this.contract.methods.balanceOf(address).call();
  }

  async getTokenUri(tokenId: string) {
    return this.contract.methods.tokenURI(tokenId).call();
  }

  async getTransaction(transactionHash: string) {
    return this.web3.eth.getTransaction(transactionHash);
  }
}
