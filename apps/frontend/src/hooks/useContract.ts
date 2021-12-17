import { useWeb3React } from '@web3-react/core';
import { notification } from 'antd';
import Web3 from 'web3';
import { AbiItem, toBN, toWei } from 'web3-utils';
import {
  RECEIVER_ADDRESS,
  WIZEMOON_CONTRACT_ADDRESS,
} from '../configurations/blockchain';
import contractABI from '../configurations/contracts/TokenContractABI';

export default function useWizeMoonContract() {
  const { library: web3, account } = useWeb3React<Web3>();

  const sendToken = async function (amount: string) {
    if (!web3) {
      return;
    }
    try {
      //TODO: Cache contract instance creation.
      const contractInstance = new web3.eth.Contract(
        contractABI as unknown as AbiItem,
        WIZEMOON_CONTRACT_ADDRESS,
        {
          from: account || '',
        }
      );
      const weiBalance = await contractInstance.methods
        .balanceOf(account)
        .call();
      // Dont use toWei if your token decimals is different than 18.
      const weiAmount = toWei(amount);
      if (toBN(weiBalance).lt(toBN(weiAmount))) {
        notification.warn({
          placement: 'bottomRight',
          message: 'Not enough WIZEMOON',
          description: 'You can buy more WIZEMOON here',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
        return;
      }
      const txHash = await contractInstance.methods
        .transfer(RECEIVER_ADDRESS, weiAmount)
        .send();
    } catch (error) {
      notification.error({
        placement: 'bottomRight',
        message: 'Error',
        description: (error as any).message,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
      console.log(error);
    }
  };

  const getBalance = async function (account: string) {
    if (!web3) {
      return;
    }
    try {
      const instance = new web3.eth.Contract(
        contractABI as unknown as AbiItem,
        WIZEMOON_CONTRACT_ADDRESS
      );
      return await instance.methods.balanceOf(account).call();
    } catch (error) {
      console.log(error);
    }
  };

  return { sendToken, getBalance };
}
