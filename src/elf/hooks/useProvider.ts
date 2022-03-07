import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { ExternalProvider, Provider } from "@ethersproject/providers";
import { ALCHEMY_GOERLI_WSS_URL, ALCHEMY_MAINNET_WSS_URL } from "elf/providers";
import { ChainId } from "elf/wallets/chains";
import { providers } from "ethers";
import { useEffect, useState } from "react";

export const NEXT_ENV = process.env.NODE_ENV as string;
export const isDev = NEXT_ENV === "development";
const LOCAL_RPC_HOST = "http://127.0.0.1:8545";

const alchemyWeb3MainnetWebSocketProvider = new providers.Web3Provider(
  createAlchemyWeb3(ALCHEMY_MAINNET_WSS_URL)
    .currentProvider as ExternalProvider,
  ChainId.MAINNET,
);

export const useProvider = (chainId?: number) => {
  const [provider, setProvider] = useState<Provider>(
    alchemyWeb3MainnetWebSocketProvider,
  );

  useEffect(() => {
    if (chainId === ChainId.GOERLI) {
      const alchemyWeb3GoerliWebSocketProvider = new providers.Web3Provider(
        createAlchemyWeb3(ALCHEMY_GOERLI_WSS_URL)
          .currentProvider as ExternalProvider,
        ChainId.GOERLI,
      );

      setProvider(alchemyWeb3GoerliWebSocketProvider);
      return;
    }

    if (chainId === ChainId.MAINNET) {
      setProvider(alchemyWeb3MainnetWebSocketProvider);
      return;
    }

    const localhostProvider = new providers.JsonRpcProvider(LOCAL_RPC_HOST);
    console.warn("Chain id not recognized. Defaulting to local host provider.");
    setProvider(localhostProvider);
  }, [chainId]);

  return provider;
};
