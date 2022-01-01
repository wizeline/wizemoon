import { InjectedConnector } from '@web3-react/injected-connector';

export const BSC_TESTNET = 97;

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, BSC_TESTNET],
});
