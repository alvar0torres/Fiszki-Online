import { useEffect, useState } from "react";

import ReactCardFlip from "react-card-flip";

import styles from "./Card.module.scss";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [props.cardsToShow]);

  const onClickHandler = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setIsFlipped(false);
    }, 3000);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={onClickHandler} className={styles["card-front"]}>
        <div className={styles["card-container"]}>
          <ul className={styles.list}>
            <li>
              <strong>{props.front[0]}</strong>
            </li>
            <li>{props.front[1]}</li>
          </ul>
        </div>
      </div>

      <div onClick={onClickHandler} className={styles["card-back"]}>
        <div className={styles["card-container"]}>
          {isFlipped && (
            <ul className={styles.list}>
              <li>
                <strong>{props.back[0]}</strong>
              </li>
              <li>{props.back[1]}</li>
            </ul>
          )}
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
