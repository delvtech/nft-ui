import "@fontsource/rubik";
import { Web3ReactProvider } from "@web3-react/core";
import { Footer } from "components/Layout/Footer";
import { Header } from "components/Layout/Header";
import { Transition } from "components/Layout/Transition";
import { WalletNotifier } from "components/Wallet/WalletNotifier";
import { WalletDialogProvider } from "contexts/WalletDialogContext/provider";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import type { AppProps } from "next/app";
import Head from "next/head";
import "public/assets/fonts/style.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { getEthereumProviderLibrary } from "src/elf/getEthereumProviderLibrary";
import { GlobalStyle } from "styles/globalStyles";

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Element ElfiVerse</title>
        <meta name="robots" content="follow, index" />
        <meta content={""} name="description" />
        <meta
          property="og:url"
          content={`https://nft.element.fi${router.asPath}`}
        />
        <link rel="canonical" href={`https://nft.element.fi${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />
        <meta property="og:title" content="Element ElfiVerse" />
        <meta property="og:image" content="" />
        <meta property="og:image:alt" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="Element ElfiVerse" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Web3ReactProvider getLibrary={getEthereumProviderLibrary}>
        <QueryClientProvider client={queryClient}>
          <WalletDialogProvider>
            <Header />
            <Toaster />
            <WalletNotifier>
              <Transition location={router.pathname}>
                <Component {...pageProps} />
              </Transition>
            </WalletNotifier>
          </WalletDialogProvider>
        </QueryClientProvider>
      </Web3ReactProvider>
      <Footer />
    </>
  );
}
