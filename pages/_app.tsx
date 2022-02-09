import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { Header } from "components/Layout/Header";
import { Footer } from "components/Layout/Footer";
import { Transition } from "components/Layout/Transition";
import { GlobalStyle } from "styles/globalStyles";
import "public/assets/fonts/style.css";
import { Web3ReactProvider } from "@web3-react/core";
import { getEthereumProviderLibrary } from "src/elf/getEthereumProviderLibrary";
import "@fontsource/rubik";

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const hasEntered = localStorage.getItem("hasEntered");
    hasEntered && router.pathname === "/" && router.push("/home");
  }, [router]);

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
        <Header />
        <Transition location={router.pathname}>
          <Component {...pageProps} />
        </Transition>
      </Web3ReactProvider>
      <Footer />
    </>
  );
}
