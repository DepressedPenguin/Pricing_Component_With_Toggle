import styles from "./cardprice.module.scss";

interface propsCard {
  title: string;
  price: string;
  storage: string;
  users: string;
  gp: string;
  bg?: string;
  className?: string;
  button?: string;
  textColor?: string;
}

export default function CardPrice({
  title,
  price,
  storage,
  users,
  gp,
  className,
  bg,
  button,
  textColor,
}: propsCard) {
  return (
    <>
      <div
        style={{ background: bg, color: textColor }}
        className={`${styles.card_element} ${className}`}
      >
        <div className={styles.box_price_headline}>
          <p>{title}</p>
        </div>
        <div className={styles.box_price_current}>
          <h1>{price}</h1>
        </div>
        <div className={styles.box_price_storage}>
          <p>{storage}</p>
        </div>
        <div className={styles.box_price_users}>
          <p>{users}</p>
        </div>
        <div className={styles.box_price_gp}>
          <p>{gp}</p>
        </div>

        <div className={styles.box_price_btn}>
          <button className={styles.test} style={{ backgroundColor: button }}>
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
}
