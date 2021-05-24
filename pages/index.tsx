import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import ShareBtnGroup from "components/ShareBtnGroup/index";

type Vaccine = { label: string; photoUrl: string; cover: string; md5: string };

const VACCINES: Vaccine[] = [
  {
    label: "Astrazeneca",
    photoUrl: "/az.png",
    cover: "/congrat-az.png",
    md5: "cc8c0a97c2dfcd73caff160b65aa39e2",
  },
  {
    label: "Sinovac",
    photoUrl: "/sinovac.png",
    cover: "/congrat-sin.png",
    md5: "00eb66149812aca535dd2f06e0562014",
  },
];

function random() {
  return Math.floor(Math.random() * 100);
}

function getRandomVac() {
  return random() <= 20 ? VACCINES[0] : VACCINES[1];
}

function rememberEngage() {
  localStorage.setItem("visit_at", Date.now().toString());
  let countStr = localStorage.getItem("count") || "0";
  let count = parseInt(countStr);
  count += 1;
  localStorage.setItem("count", count.toString());
}

function shouldWaitLonger() {
  let visitAt = localStorage.getItem("visit_at");
  let countStr = localStorage.getItem("count") || "0";
  let count = parseInt(countStr);

  if (visitAt === null || count % 3 != 0) return false;

  let difference = Date.now() - Number.parseInt(visitAt);
  let visitAtTimestamp = new Date(difference);
  let minutes = visitAtTimestamp.getMinutes();
  console.log(visitAt, minutes);
  return minutes < 10 ? true : false;
}

function generateShareURI(host: string, vaxxParam: string) {
  return `https://${host}/${vaxxParam}`;
}

export default function Home() {
  const [state, setState] = useState("WELCOME");
  const [vac, setVac] = useState<Vaccine | null>(null);

  useEffect(() => {
    let randomVac = getRandomVac();
    setVac(randomVac);
  }, []);

  const handleClick = () => {
    if (shouldWaitLonger()) {
      setState("WAIT");
      return;
    }

    setState("RESULT");
    rememberEngage();
  };

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
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {state === "WAIT" && (
        <div className={styles.content}>
          <h1 className="text-center">
            ขออภัยด้วย ตอนนี้ยาหมดแล้ว พอดีรัฐบาลนำเข้ามาไม่ทัน
            อีกสักพักกลับมาใหม่นะ <br /> <br /> 😥😥😥
          </h1>
          <br />
          <br />
          <br />
          <br />
          <a href="/">กลับสู่หน้าแรก</a>
        </div>
      )}

      {state === "WELCOME" && (
        <div className={styles.content}>
          <h1 className="text-4xl mb-7">
            เปิดกาชา! ฉีดวัคซีน covid-19 ครั้งนี้ คุณจะได้ฉีดอะไร!?
          </h1>
          <button
            type="button"
            onClick={handleClick}
            className="text-xl text-white bg-blue-500 hover:bg-blue-300 shadow-lg px-4 py-2 rounded-md"
          >
            ฉีดเลย 💉
          </button>
        </div>
      )}

      {state === "RESULT" && vac != null && (
        <div className={styles.content}>
          <h1 className="text-4xl">ยินดีด้วย! คุณได้ฉีด {vac.label} 🥳 </h1>
          <div>
            <Image
              src={vac.photoUrl}
              alt="covid-19 vaccine logo"
              width="256"
              height="256"
            />
          </div>
          <ShareBtnGroup
            url={generateShareURI(window.location.hostname, vac.md5)}
          />
        </div>
      )}
    </div>
  );
}
