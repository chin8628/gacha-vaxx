import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>มาสุ่มกาชากันวัคซีนกันเถอะ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JJCHZV7TM4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JJCHZV7TM4');
              `,
          }}
        />

        <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `kofiWidgetOverlay.draw('chin8628', {
              'type': 'floating-chat',
              'floating-chat.donateButton.text': 'Support me',
              'floating-chat.donateButton.background-color': '#00b9fe',
              'floating-chat.donateButton.text-color': '#fff'
            });`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
