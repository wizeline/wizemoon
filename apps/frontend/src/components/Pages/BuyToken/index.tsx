import { Typography } from 'antd';
import React from 'react';
import { WIZEMOON_CONTRACT_ADDRESS } from '../../../configurations/blockchain';

const BuyToken: React.FC = () => {
  return (
    <div>
      <Typography.Title level={3}>Buy WIZEMOON token</Typography.Title>
      <Typography.Paragraph>
        I created an LP of <b>2BNB</b> and <b>2_000_000_000 WIZEMOON</b>{' '}
      </Typography.Paragraph>
      <Typography>
        You can request BNB on testnet :{' '}
        <a
          href="https://testnet.binance.org/faucet-smart"
          target="_blank"
          rel="noreferrer"
        >
          https://testnet.binance.org/faucet-smart
        </a>{' '}
        then swap the BNB for WIZEMOON , suggested value is{' '}
        <strong>0.001 BNB</strong>
      </Typography>
      <Typography>
        WIZEMOON contract address:{' '}
        <a
          href={
            'https://testnet.bscscan.com/token/' + WIZEMOON_CONTRACT_ADDRESS
          }
          target="_blank"
          title={WIZEMOON_CONTRACT_ADDRESS}
          rel="noreferrer"
        >
          0xD461B07e3d3040D9eD4E77837d6De87538F9b32f
        </a>
      </Typography>
      <Typography>
        DEX - PancakeSwap Testnet{' '}
        <a
          href="https://pancake.kiemtienonline360.com/#/swap"
          target="_blank"
          rel="noreferrer"
        >
          https://pancake.kiemtienonline360.com/#/swap
        </a>
      </Typography>
    </div>
  );
};

export default BuyToken;
