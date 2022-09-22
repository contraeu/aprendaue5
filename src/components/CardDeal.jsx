import { card } from "../assets";
import styles, { layout } from '../style';
import Button from "./Button";

const CardDeal = () =>  (

    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Conheça melhor <br className="sm:block hidden" /> seu professor.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Ricardo Quirino é formado em Design Gráfico pelo Instituto Infnet desde 2015. Possui duas certificações de Autodesk Maya, atua como professor por mais de 5 anos. Atualmente trabalha como professor de Game Design e também de Unreal Engine.</p>
<a href="https://wa.me/5521966416446" target="_blank"><Button styles="mt-10" /></a>
        
        </div> 

        <div className={layout.sectionImg}>
          <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>
        
    </section>
  )


export default CardDeal