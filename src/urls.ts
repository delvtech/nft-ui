import { BigNumber } from "ethers";

export const DISCORD_URL = "https://discord.gg/EEfKmfQdtx";
export const TWITTER_URL = "https://twitter.com/element_fi";
export const ELEMENT_FI_URL = "https://element.fi/";
export const ADDRESS_SCREEN_URL =
  "https://6zqnxzsgja.execute-api.us-east-2.amazonaws.com/screen";
const PINATA_GATEWAY = "https://element-fi.mypinata.cloud/ipfs";
const NFT_ASSET_PATH =
  "/bafybeibar2yqdpghqprbq6ltqszdmczff3koalgoespozhff4e6ptxe44q";

export const getTokenAssetURL = (id: BigNumber) => {
  return PINATA_GATEWAY + NFT_ASSET_PATH + `/${id.toString()}.png`;
};
