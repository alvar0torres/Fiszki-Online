import { useState, useEffect, useCallback } from "react";

import Card from "./Card";

import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import ReactCountryFlag from "react-country-flag";

import styles from "./CardsSection.module.scss";

const START = [
  {
    id: "c1",
    front: ["la casa", "Vivo en una casa muy grande"],
    back: ["dom", "Mieszkam w duzym domu"],
  },
  {
    id: "c2",
    front: ["la familia", "Mi familia vive en Polonia"],
    back: ["rodzina", "Moja rodzina mieszka w Polsce"],
  },
  {
    id: "c3",
    front: ["blanco / blanca", "El sofa es blanco"],
    back: ["bialy, biala, biale", "Sofa jest biala"],
  },
  {
    id: "c4",
    front: ["negro / negra", "La silla es negra"],
    back: ["czarny, czarna, czarne", "Krzeslo jest czarne"],
  },
  {
    id: "c5",
    front: ["amarillo / amarilla", "-Es amarilla"],
    back: ["zolty, zolta, zolte", "-Jest zolte."],
  },
  {
    id: "c6",
    front: ["el supermercado", "A veces voy al supermercado"],
    back: ["supermarket", "Czasami chodzde do supermarketu"],
  },
  {
    id: "c7",
    front: ["el supermercado", "A veces voy al supermercado"],
    back: ["supermarket", "Czasami chodzde do supermarketu"],
  },
  {
    id: "c8",
    front: ["el euro", "Tengo cinco euros"],
    back: ["euro", "Mam piec euro"],
  },
  {
    id: "c9",
    front: ["¿quién?", "¿Quién eres?"],
    back: ["kto", "Kim jestes"],
  },
  {
    id: "c10",
    front: ["tu", "(Tú) eres Inés"],
    back: ["ty", "(Ty) jestes Agnieszka"],
  },
  {
    id: "c11",
    front: ["usted", "¿Es usted polaco?"],
    back: ["pan / pani", "Czy pan jest Polakiem"],
  },
  {
    id: "c12",
    front: ["el", "Él es español"],
    back: ["on", "On jest Hiszpanem"],
  },
  {
    id: "c13",
    front: ["yo", "(Yo) soy Pablo."],
    back: ["ja", "(Ja) jestem Pawel"],
  },
  {
    id: "c14",
    front: ["ella", "Ella es polaca"],
    back: ["ona", "Ona jest Polka"],
  },
  {
    id: "c15",
    front: ["muy", "Pablo esta muy bien"],
    back: ["bardzo", "Pawel ma sie bardzo dobrze"],
  },
];

const MEDIUM = [
  {
    id: "c1",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c2",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
  {
    id: "c3",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c4",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
  {
    id: "c5",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c6",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
  {
    id: "c7",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c8",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
  {
    id: "c9",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c10",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
  {
    id: "c11",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c12",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
  {
    id: "c13",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c14",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
  {
    id: "c15",
    front: ["el zoologico", "el zoo"],
    back: ["ogrod zoologiczny", "zoo"],
  },
  {
    id: "c16",
    front: ["la suciedad", "sucio"],
    back: ["brud", "brudny"],
  },
];

const CardsSection = () => {
  const [level, setLevel] = useState(START);
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
      setLevel(START);
    } else if (event.target.value === "medium") {
      setLevel(MEDIUM);
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
