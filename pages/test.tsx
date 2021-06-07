import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  console.log(router.basePath)

  return (
    <div>
      <Head>
        <meta property="og:url" content="https://gacha-vaxx.vercel.app/test" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="test" />
        <meta
          property="og:description"
          content="test"
        />
        <meta property="og:image" content="/cover-pfizer.png" />

        <meta
          name="twitter:title"
          content="test"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://gacha-vaxx.vercel.app/cover-az.png" />
      </Head>
    </div>
  );
}
