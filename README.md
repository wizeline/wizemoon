# wizemoon

This project is a demo of creating a game on blockchain.

## Blockchain

### Wallet

https://metamask.io/

Add Binance Smart Chain to MetaMask: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain

### BNB token on testnet

https://testnet.binance.org/faucet-smart

### Contracts

WIZEMOON Token Contract: https://testnet.bscscan.com/tx/0x8e42b0eb526244760e9ed6b50af43c75b4c06c23db714e32062f4805d698385b

WIZEMOON Game Contract:

WIZEMOON NFT Contract: https://testnet.bscscan.com/address/0x3ab575af7bb6f97dc14d8f815f7ce16d21138bfc#code

### Buy Token

PancakeSwap Testnet: https://pancake.kiemtienonline360.com/#/swap

## Prerequisite

- Node

## Frontend

`yarn start frontend`

## Backend

### Game API

`docker compose up`

### Database migration

Currently, The project only supports run migration automatically when the app startup due to an issue of Webpack with TypeORM.

- Creating a new migration: `yarn typeorm migration:create -d apps/game-api/src/database/migrations -n NewMigration`

## Deployment

### Build

- Frontend `yarn build frontend --target=production`
- Game API `docker build -t game-api --build-arg=SERVICE_NAME=game-api --target=production .`

  RUN : `docker run -p 3333:3333 --rm game-api`
