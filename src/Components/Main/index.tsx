import CardPrice from "../CardPrice";
import Switcher from "../Switcher/Switcher";
import styles from "./main.module.scss";

interface Props {
  toggle: (toggle: boolean) => void;
  isYearly: boolean;
}

export default function Main({ toggle, isYearly }: Props) {
  const YearlPrice_One = isYearly === true ? "$199.99" : "$19.99";
  const YearlPrice_Two = isYearly === true ? "$249.99" : "$24.99";
  const YearlPrice_Three = isYearly === true ? "$399.99" : "$39.99";

  return (
    <>
      <Switcher toggle={toggle} />
      <div className={styles.main_card}>
        <CardPrice
          title="Basic"
          price={YearlPrice_One}
          storage="500 GB Storage"
          users="2 Users Allowed"
          gp="Send up to 3 GB"
        />
        <CardPrice
          title="Professional"
          price={YearlPrice_Two}
          storage="1 TP Storage"
          users="5 Users Allowed"
          gp="Send up to 10 GB"
          // bg={uniqColor}
          className={styles.gradientBackground}
          button={styles.sa}
          textColor="white"
        />
        <CardPrice
          title="Master"
          price={YearlPrice_Three}
          storage="2 TP Storage"
          users="10 Users Allowed"
          gp="Send up to 20 GB"
        />
      </div>
    </>
  );
}
