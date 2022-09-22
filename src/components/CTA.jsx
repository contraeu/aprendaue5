import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Faça sua aula experimental agora!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Aula totalmente gratuita para que possa conhecer minha didática.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
       <a href="https://wa.me/5521966416446" target="_blank"><Button  /></a>
    </div>
  </section>
);

export default CTA;