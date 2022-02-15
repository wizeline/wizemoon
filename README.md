# wizemoon

This project is a demo of creating a game on blockchain.

# Blockchain

### Wallet

https://metamask.io/

Add Binance Smart Chain to MetaMask: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain

### BNB token on testnet

https://testnet.binance.org/faucet-smart

### Contracts

WIZEMOON Token Contract: https://testnet.bscscan.com/tx/0x8e42b0eb526244760e9ed6b50af43c75b4c06c23db714e32062f4805d698385b

WIZEMOON NFT Contract: https://testnet.bscscan.com/address/0x3ab575af7bb6f97dc14d8f815f7ce16d21138bfc#code

### Buy Token

PancakeSwap Testnet: https://pancake.kiemtienonline360.com/#/swap

# Development
## Prerequisite

- Node
- Docker
## Frontend

`yarn start frontend`

## Backend

### game-api service

- Prepare environment variables

```
cp -n apps/game-api/.env.sample apps/game-api/.env.local
```

- Start with Docker

```
docker compose up
```

- Generate database migration

```
yarn nx run game-api:generate-migration  -n NewDBChange
```

- For more migration commands, look in `apps/game-api/project.json`

# Deployment

## game-api

- build image:
  ```
  docker build -t game-api --build-arg=SERVICE_NAME=game-api  --target=production .
  ```
- envs: `apps/game-api/.env.sample`

## Frontend

- Environment variables:
  ```
  NX_BOOKING_API_ORIGIN=https://game-api.sample.com
  ```
- Build
  `yarn build frontend --config=production`

  output: `dist/apps/frontend`
