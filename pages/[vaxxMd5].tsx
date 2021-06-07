import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styles from "styles/Home.module.css";
import { VACCINES } from "../constansts";
import Head from "next/head";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let ogImage = "/og-image.png";

  if (context.query.vaxxMd5 === VACCINES[0].md5) {
    ogImage = VACCINES[0].cover;
  } else if (context.query.vaxxMd5 === VACCINES[1].md5) {
    ogImage = VACCINES[1].cover;
  } else {
    ogImage = VACCINES[2].cover;
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
  const router = useRouter();

  useEffect(() => {
    window.location.href = "/";
  }, []);

  return (
    <div className={styles.content}>
      <Head>
        <meta
          property="og:url"
          content={`https://gacha-vaxx.vercel.app/${router.query.vaxxMd5}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="มาสุ่มกาชากันวัคซีนกันเถอะ" />
        <meta
          property="og:description"
          content="มาสุ่มกาชากันเถอะ ดูกันว่าคุณจะได้วัคซีน covid-19 ยี่ห้ออะไร"
        />
        <meta property="og:image" content={ogImage} />

        <meta
          name="twitter:title"
          content="มาสุ่มกาชากันเถอะ ดูกันว่าคุณจะได้วัคซีน covid-19 ยี่ห้ออะไร"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
      </Head>
    </div>
  );
}
