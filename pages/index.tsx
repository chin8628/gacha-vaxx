import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import ShareBtnGroup from "components/ShareBtnGroup/index";
import { VACCINES } from "../constansts";

type Vaccine = { label: string; photoUrl: string; cover: string; md5: string };

function getProbability(precision = 2) {
  return parseFloat((Math.random() * 100).toFixed(precision));
}

function getRandomVac() {
  if (getProbability() <= 0.1) {
    return VACCINES[2];
  } else if (getProbability() <= 80) {
    return VACCINES[1];
  } else {
    return VACCINES[0];
  }
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
  return minutes < 1 ? true : false;
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
        <meta property="og:url" content="https://gacha-vaxx.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="มาสุ่มกาชากันวัคซีนกันเถอะ" />
        <meta
          property="og:description"
          content="มาสุ่มกาชากันเถอะ ดูกันว่าคุณจะได้วัคซีน covid-19 ยี่ห้ออะไร"
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      <div className="fireworks"></div>

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
          <h1 className="text-4xl mb-7 text-center">
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
          {vac.label === "Pfizer (SSR Rank)" ? (
            <div className="my-8">
              <Image
                src={vac.cover}
                alt="covid-19 vaccine logo"
                width="1000"
                height="500"
              />
            </div>
          ) : (
            <div className="border-4 border-black rounded flex flex-col items-center py-5 my-8">
              <h1 className="text-4xl font-bold text-center py-3">
                ยินดีด้วยจ้า!!!
              </h1>
              <div className="mx-20">
                <Image
                  src={vac.photoUrl}
                  alt="covid-19 vaccine logo"
                  width="256"
                  height="256"
                />
              </div>
              <h2 className="text-2xl text-center py-3">
                คุณสุ่มได้ {vac.label}
              </h2>
            </div>
          )}
          <ShareBtnGroup
            url={generateShareURI(window.location.hostname, vac.md5)}
          />
        </div>
      )}
    </div>
  );
}
