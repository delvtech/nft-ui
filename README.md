# Element NFT Website

## Getting started

Install dependencies

```bash
yarn
# or
yarn install
```

Setting up .env in project root

```
NEXT_PUBLIC_MAINNET_ALCHEMY_KEY=<insert_provider_key>
NEXT_PUBLIC_GOERLI_ALCHEMY_KEY=<insert_provider_key>
NEXT_PUBLIC_TARGET_CHAIN=1 #mainnet
```

Run the development server

```bash
yarn dev
```

Run local production server

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contracts

The smart contracts assocaiated with this project can be found [here](https://github.com/element-fi/nft-contracts). The generated typechain classes have been migrated here already.

## Github Actions

We currently have two pull request actions, one for formatting (prettier) and linting (es-lint)

### Running locally <br>

[Act](https://github.com/nektos/act) can be used to simulate github actions locally. Follow the repositories quickstart guide. After installing Act you can run our actions using in the root of this project.

```bash
act pull_request
```

Optionally you can run these commands without act.

```bash
yarn prettier:check && yarn lint
```

## Notable libraries

- useWeb3React
- react-query-typechain
- Typechain
- Styled components
