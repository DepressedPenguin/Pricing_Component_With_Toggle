import { useState } from "react";
import styles from "./switcher.module.scss";

interface Props {
  toggle: (toggle: boolean) => void;
}

export default function Switcher({ toggle }: Props) {
  // STATE FOR IS TOGGLE

  const [isToggle, setIsToggle] = useState(false);

  const handleChange = () => {
    const newToggleState = !isToggle;
    setIsToggle(newToggleState);
    toggle(newToggleState);
  };

  return (
    <>
      <div className={styles.switcherPrice}>
        <div className={styles.headlineSwitcher}>
          <h1>Our Pricing</h1>
        </div>
        <div className={styles.toggleMonthly}>
          <div className={styles.boxPricing}>
            <p>Annually</p>
          </div>
          <div className={styles.boxPricing}>
            <label className={styles.switcher}>
              <input
                onChange={handleChange}
                className={styles.switcher_checkbox}
                type="checkbox"
              />
              <span className={styles.point}></span>
            </label>
          </div>
          <div className={styles.boxPricing}>
            <p>Monthly</p>
          </div>
        </div>
      </div>
    </>
  );
}
