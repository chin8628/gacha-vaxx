import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import styles from "components/ShareBtnGroup/ShareBtnGroup.module.css";
import { Vaccine } from "../../constansts";

type Props = {
  vac: Vaccine;
  url: string;
};

function ShareBtnGroup({ url, vac }: Props) {
  const tweetMsg = encodeURIComponent(
    `ว๊าย ฉันสุ่มได้ ${vac.label} แล้วเธอละได้วัคซีนยัง? มาลองสุ่มกาชาวัคซีนที่`
  );

  console.log(url);
  const encodedUrl = encodeURIComponent(url + "?9");
  console.log(encodedUrl);

  return (
    <div>
      <div className={styles.center}>
        <h2>อวดให้เพื่อนรู้สิว่าคุณได้วัคซีนแล้ว</h2>
        <div className="flex justify-center align-center">
          <div className="p-2">
            <FacebookShareButton url={url}>
              <FacebookIcon size={48} />
            </FacebookShareButton>
          </div>
          <div className="p-2">
            <TwitterShareButton
              url={url}
              title={`ว๊าย ฉันสุ่มได้ ${vac.label} แล้วเธอละได้วัคซีนยัง? มาลองสุ่มกาชาวัคซีนที่`}
              hashtags={["gachavaccine"]}
            >
              <TwitterIcon size={48} />
            </TwitterShareButton>
          </div>
          <div className="p-2">
            <LineShareButton
              url={url}
              title={`ว๊าย ฉันสุ่มได้ ${vac.label} แล้วเธอละได้วัคซีนยัง? มาลองสุ่มกาชาวัคซีนที่`}
            >
              <LineIcon size={48} />
            </LineShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareBtnGroup;
