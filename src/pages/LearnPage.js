import Header from "../components/Header";
import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer";

import styles from "./LearnPage.module.scss";


const LearnPage = () => {
  return (
    <section className={styles.page}>
      <Header />
      <CardsSection />
      <Footer />
    </section>
  );
};

export default LearnPage;
