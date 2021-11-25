import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header >
      <div className={styles.header}>
        <h1>Fiszki Online</h1>
      </div>
      <div className={styles.description}>Flashcards for learning languages.</div>
    </header>
  );
};

export default Header;
