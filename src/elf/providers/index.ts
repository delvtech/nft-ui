export const ALCHEMY_GOERLI_KEY = process.env
  .NEXT_PUBLIC_GOERLI_ALCHEMY_KEY as string;
export const ALCHEMY_MAINNET_KEY = process.env
  .NEXT_PUBLIC_MAINNET_ALCHEMY_KEY as string;

export const ALCHEMY_GOERLI_HTTP_URL = `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_KEY}`;
export const ALCHEMY_MAINNET_HTTP_URL = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_KEY}`;

export const ALCHEMY_GOERLI_WSS_URL = `wss://eth-goerli.ws.alchemyapi.io/v2/${ALCHEMY_GOERLI_KEY}`;
export const ALCHEMY_MAINNET_WSS_URL = `wss://eth-goerli.ws.alchemyapi.io/v2/${ALCHEMY_GOERLI_KEY}`;
