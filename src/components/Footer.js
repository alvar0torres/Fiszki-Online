import styles from "./Footer.module.scss";

const Footer = () => {
    return <footer className={styles.footer}>© {new Date().getFullYear()} Alvaro Torres</footer>
};

export default Footer;