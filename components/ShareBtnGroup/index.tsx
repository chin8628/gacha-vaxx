import styles from "components/ShareBtnGroup/ShareBtnGroup.module.css";

type Props = {
  url: string;
};

function ShareBtnGroup({ url }: Props) {
  return (
    <div className={styles.center}>
      <h2>อวดให้เพื่อนรู้สิว่าคุณได้วัคซีนแล้ว</h2>
      <div
        className="fb-share-button"
        data-href={url}
        data-layout="button_count"
        data-size="large"
      >
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)};src=sdkpreparse`}
          className="fb-xfbml-parse-ignore"
        >
          Share
        </a>
      </div>
    </div>
  );
}

export default ShareBtnGroup;
