import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { notification } from 'antd';
import Web3 from 'web3';
import { AbiItem, toBN, toWei } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import {
  RECEIVER_ADDRESS,
  WIZEMOON_CONTRACT_ADDRESS,
} from '../configurations/blockchain';
import contractABI from '../configurations/contracts/WizeMoonContractABI.json';

export default function useWizeMoonContract() {
  const { library: web3, account } = useWeb3React<Web3>();

  const contractInstance = useMemo(() => {
    if (!web3) {
      return;
    }
    return new web3.eth.Contract(
      contractABI as unknown as AbiItem[],
      WIZEMOON_CONTRACT_ADDRESS,
      {
        from: account || '',
      }
    );
  }, [web3, account]);

  const sendToken = async function (amount: string) {
    if (!web3) {
      return;
    }
    try {
      //TODO: Cache contract instance creation.
      const weiBalance = await contractInstance?.methods
        .balanceOf(account)
        .call();
      // Dont use toWei if your token decimals is different than 18.
      const weiAmount = toWei(amount);
      if (toBN(weiBalance).lt(toBN(weiAmount))) {
        notification.warn({
          placement: 'bottomRight',
          message: 'Not enough WIZEMOON',
        });
        return;
      }
      const transaction = await contractInstance?.methods
        .transfer(RECEIVER_ADDRESS, weiAmount)
        .send();
      console.log({ transaction });
      return transaction;
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
      return await contractInstance?.methods.balanceOf(account).call();
    } catch (error) {
      console.log(error);
    }
  };

  return { sendToken, getBalance, contractInstance };
}
