import { useState, useEffect, useCallback } from "react";

import Card from "./Card";

import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import ReactCountryFlag from "react-country-flag";

import styles from "./CardsSection.module.scss";

import EASY from "../levels/Easy";

import MEDIUM from "../levels/Medium";

import ADVANCED from "../levels/Advanced";


const CardsSection = () => {
  const [level, setLevel] = useState(EASY);
  const [cardsToShow, setCardsToShow] = useState([]);
  const [cardsClasses, setCardsClasses] = useState(styles["card-grid"]);

  const updateCards = useCallback(() => {
    let usedCards = [];
    let displayedCards = [];

    while (displayedCards.length !== 6) {
      const random = Math.floor(Math.random() * level.length);

      if (!usedCards.includes(level[random].id)) {
        displayedCards.push(level[random]);
        usedCards.push(level[random].id);
      }
    }

    return displayedCards;
  }, [level]);

  useEffect(() => {
    setCardsToShow(updateCards());
  }, [level, updateCards]);

  const refreshCardsHandler = () => {
    setCardsClasses(styles["card-grid-flip"]);
    setCardsToShow(updateCards());
    setTimeout(() => {
      setCardsClasses(styles["card-grid"]);
    }, 750);
  };

  const changeLevelHandler = (event) => {
    if (event.target.value === "easy") {
      setLevel(EASY);
    } else if (event.target.value === "medium") {
      setLevel(MEDIUM);
    } else if (event.target.value === "advanced") {
      setLevel(ADVANCED);
    }
  };

  return (
    <section className={styles.section}>
      <h1>Click on a card to flip it</h1>
      <div className={styles.config}>
        <div className={styles.select}>
          <label htmlFor="cards-level">Choose a level:</label>
          <select onChange={changeLevelHandler} name="level" id="cards-level">
            <option value="easy">EASY</option>
            <option value="medium">MEDIUM</option>
            <option value="advanced">ADVANCED</option>
          </select>
        </div>
        <div className={styles.flags}>
          <ReactCountryFlag
            countryCode="ES"
            svg
            style={{
              width: "2.5em",
              height: "2.5em",
            }}
            title="US"
          />
          <ReactCountryFlag
            countryCode="PL"
            svg
            style={{
              width: "2.5em",
              height: "2.5em",
            }}
            title="US"
          />
        </div>
      </div>

      <div className={cardsClasses}>
        {cardsToShow.map((card) => (
          <Card
            key={card.id}
            cardsToShow={cardsToShow}
            front={card.front}
            back={card.back}
          />
        ))}
      </div>

      <button onClick={refreshCardsHandler}>
        <span className={styles["button-content"]}>
          <ChangeCircleIcon />
          Change Cards
        </span>
      </button>
    </section>
  );
};

export default CardsSection;
