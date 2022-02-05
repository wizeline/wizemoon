import { Injectable, Logger } from '@nestjs/common';
import Web3 from 'web3';
import { toBN } from 'web3-utils';

const { BSC_RPC_ENDPOINT = '' } = process.env;

@Injectable()
export class PaymentService {
  web3: Web3;
  constructor() {
    this.web3 = new Web3(BSC_RPC_ENDPOINT);
  }

  async verify(txHash: string, pokemonPrice: string) {
    const txData = await this.web3.eth.getTransaction(txHash);
    const transferInput = this.getTxInput(txData);
    const bnTransferredAmount = toBN(transferInput.amount);
    const bnPokemonPrice = toBN(Number(pokemonPrice) * 10 ** 18);
    Logger.debug(
      `bnTransferredAmount=${bnTransferredAmount} ; bnPokemonPrice=${bnPokemonPrice}`
    );
    if (bnPokemonPrice.eq(bnTransferredAmount)) {
      return true;
    }
    throw new Error(
      `Invalid payment expected: ${bnPokemonPrice} but only get: ${bnTransferredAmount}`
    );
  }

  async getTransactionData(txHash: string) {
    return this.web3.eth.getTransaction(txHash);
  }

  getTxInput(txData: any) {
    return this.web3.eth.abi.decodeParameters(
      [
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      `0x${txData.input.substring(10)}`
    );
  }
}
