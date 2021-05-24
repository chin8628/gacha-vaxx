import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0"
            nonce="GlKFQoOH"
          ></script>
          <div id="fb-root"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
              fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
