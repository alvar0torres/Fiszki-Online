import { useState } from "react";

import ReactCardFlip from "react-card-flip";

import styles from "./Card.module.scss";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClickHandler = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={onClickHandler} className={styles["card-front"]}>
        <div className={styles["card-container"]}>
          <ul className={styles.list}>
            <li>
              <strong>la tarde</strong>
            </li>
            <li>Por las tardes visito a mis amigos</li>
          </ul>
        </div>
      </div>

      <div onClick={onClickHandler} className={styles["card-back"]}>
        <div className={styles["card-container"]}>
          <ul className={styles.list}>
            <li>
              <strong>popoludnie; wieczor</strong>
            </li>
            <li>Wieczorami odwiedzam przyjaciol.</li>
          </ul>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
