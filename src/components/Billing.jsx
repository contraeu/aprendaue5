import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Crie ambientes realistas <br className="sm:block hidden" /> com maior velocidade.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Os resultados da Unreal Engine são tão expressivos e realistas que até mesmo arquitetos e estúdios de efeitos visuais cinematográficos começaram a utilizar a ferramenta.
      </p>

      
    </div>
  </section>
);

export default Billing;