import styles from "components/ShareBtnGroup/ShareBtnGroup.module.css";

type Props = {
  url: string;
};

function ShareBtnGroup({ url }: Props) {
  return (
    <div className={styles.center}>
      <h2>อวดให้เพื่อนรู้สิว่าคุณได้วัคซีนแล้ว</h2>
      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&width=96&height=20&appId"
        width="96"
        height="20"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default ShareBtnGroup;
