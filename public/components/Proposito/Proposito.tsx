import styles from '../Proposito/sass/styles.module.css'

// import '@splidejs/splide/css';

// import Splide from '@splidejs/splide';

// const splide = new Splide( '.splide' );
// splide.mount();

export default function Proposito () {



    return(
        <section className={styles.sectionProposito}>
            <div className={styles.containerTexts}>
                <p className={styles.propositoIdentificador}>Propósito</p>
                <h1 className={styles.title}>Nossos <span>diferenciais</span></h1>
            </div>
            
            {/* Ler melhor a doc */}
                {/* <section className="splide">
                    <div className="splide__track">
                        <div className="splide__list">
                            <div className="splide__slide">
                            </div>
                        </div>
                    </div>
                </section> */}


                <div className={styles.slides}>
                        <div className={styles.partSlides}>
                            <h1 className={styles.numerationSlide}>1</h1>
                            <p className={styles.textSlide}>Modelo boutique com atendimento prestado pelos fundadores de forma exclusiva e dedicada</p>
                        </div>
                </div>

        </section>
    )
}