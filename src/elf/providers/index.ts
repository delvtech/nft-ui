import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { ExternalProvider, Provider } from "@ethersproject/providers";
import { ChainId } from "elf/wallets/chains";
import { providers } from "ethers";

export const ALCHEMY_GOERLI_KEY = process.env
  .NEXT_PUBLIC_GOERLI_ALCHEMY_KEY as string;
export const ALCHEMY_MAINNET_KEY = process.env
  .NEXT_PUBLIC_MAINNET_ALCHEMY_KEY as string;

export const ALCHEMY_GOERLI_HTTP_URL = `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_KEY}`;
export const ALCHEMY_MAINNET_HTTP_URL = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_KEY}`;

const LOCAL_RPC_HOST = "http://127.0.0.1:8545";

export function getProvider(chainId: ChainId) {
  if (chainId === ChainId.GOERLI) {
    const web3Goerli = createAlchemyWeb3(
      `wss://eth-goerli.ws.alchemyapi.io/v2/${ALCHEMY_GOERLI_KEY}`,
    );
    const alchemyWeb3GoerliWebSocketProvider = new providers.Web3Provider(
      web3Goerli.currentProvider as ExternalProvider,
      ChainId.GOERLI,
    );
    return alchemyWeb3GoerliWebSocketProvider as Provider;
  }

  if (chainId === ChainId.MAINNET) {
    const web3Mainnet = createAlchemyWeb3(
      `wss://eth-mainnet.ws.alchemyapi.io/v2/${ALCHEMY_MAINNET_KEY}`,
    );

    const alchemyWeb3MainnetWebSocketProvider = new providers.Web3Provider(
      web3Mainnet.currentProvider as ExternalProvider,
      ChainId.MAINNET,
    );

    return alchemyWeb3MainnetWebSocketProvider as Provider;
  }

  const localhostProvider = new providers.JsonRpcProvider(LOCAL_RPC_HOST);
  return localhostProvider;
}
