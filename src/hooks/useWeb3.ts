import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

export default function useWeb3() {
  return useWeb3React<Web3Provider>();
}
