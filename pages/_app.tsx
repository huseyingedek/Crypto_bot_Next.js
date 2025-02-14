import "@/Public/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/Core/index";
import { ThemeProvider } from "@/Context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
