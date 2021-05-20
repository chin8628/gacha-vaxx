import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

type Vaccine = { label: string; photoUrl: string };

const VACCINES: Vaccine[] = [
  {
    label: "Astrazeneca",
    photoUrl: "/az.png",
  },
  {
    label: "Sinovac",
    photoUrl: "/sinovac.png",
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
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="มาสุ่มกาชากันเถอะ ดูกันว่าคุณจะได้วัคซีน covid-19 ยี่ห้ออะไร"
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      {state === "WAIT" && (
        <div className={styles.content}>
          <h1>
            ขออภัยด้วย ตอนนี้ยาหมดแล้ว พอดีรัฐบาลนำเข้ามาไม่ทัน
            อีกสักพักกลับมาใหม่นะ <br /> 😥😥😥
          </h1>
        </div>
      )}

      {state === "WELCOME" && (
        <div className={styles.content}>
          <h1>เปิดกาชา! ฉีดวัคซีน covid-19 ครั้งนี้ คุณจะได้ฉีดอะไร!?</h1>
          <button onClick={handleClick}>ฉีดเลย!</button>
        </div>
      )}

      {state === "RESULT" && vac != null && (
        <div className={styles.content}>
          <h1>ยินดีด้วย! คุณได้ฉีด {vac.label} 🥳 </h1>
          <div>
            <Image
              src={vac.photoUrl}
              alt="covid-19 vaccine logo"
              width="256"
              height="256"
            />
          </div>
        </div>
      )}
    </div>
  );
}
