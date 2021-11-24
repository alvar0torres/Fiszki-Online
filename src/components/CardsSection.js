import Card from "./Card";

import styles from "./CardsSection.module.scss";

const CardsSection = () => {
  return (
    <section className={styles.section}>
      <h1>Click on a card to flip it</h1>
      <div className={styles["card-grid"]}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardsSection;
