import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styles from "styles/Home.module.css";
import { VACCINES } from "../constansts";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let ogImage = "/og-image.png";

  if (context.query.vaxxMd5 === VACCINES[0].md5) {
    ogImage = VACCINES[0].cover;
  } else if (context.query.vaxxMd5 === VACCINES[1].md5) {
    ogImage = VACCINES[1].cover;
  }

  return {
    props: {
      ogImage,
    },
  };
};

type Props = {
  ogImage: string;
};

export default function Home({ ogImage }: Props) {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>มาสุ่มกาชากันวัคซีนกันเถอะ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://gacha-vaxx.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="มาสุ่มกาชากันวัคซีนกันเถอะ" />
        <meta
          property="og:description"
          content="มาสุ่มกาชากันเถอะ ดูกันว่าคุณจะได้วัคซีน covid-19 ยี่ห้ออะไร"
        />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={ogImage} />
        redirecting...
      </Head>
    </div>
  );
}
