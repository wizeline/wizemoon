import Web3 from 'web3';
import ContractABI from './TokenContractABI';

const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.BSC_RPC_ENDPOINT)
);

const contractAddress = '0xD461B07e3d3040D9eD4E77837d6De87538F9b32f';

const contractInstance = new web3.eth.Contract(
  ContractABI as any,
  contractAddress
);

export async function getBalanceOf(accountAddress: string) {
  return contractInstance.methods.balanceOf(accountAddress).call();
}

contractInstance.events
  .Transfer(function (error, event) {
    if (!error) {
      console.log(event);
    }
  })
  .on('data', function (event) {
    console.log(event);
  });
