import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Fiszki Online</h1>
      </div>
      <nav>
        <ul>
          <li>Learn</li>
          <li>Test</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
