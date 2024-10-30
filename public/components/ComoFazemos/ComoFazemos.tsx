import styles from "./sass/styles.module.css"
export default function ComoFazemos () {

    return(
        <section className={styles.sectioComo}>
            <div className={styles.texts}>
                <p className={styles.titleComo}>Como fazemos</p>
                <h1 className={styles.title}>Conheça as principais <span>entregas</span> que sustentam a <span>evolução</span> <span>contínua</span> do projeto e garantem a obtenção de <span>resultados</span>
                </h1>
            </div>

            <section className={styles.sectionPlanejamento}>
                {/*Planejamento abre e fecha*/}
                <div className={styles.planejamento}>
                    <p className={styles.subtitulo}>Setup & Onboarding</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M-5.42349e-08 1.74075L5.55333 7.2865C5.93671 7.66808 6.4556 7.8823 6.9965 7.8823C7.5374 7.8823 8.05629 7.66808 8.43967 7.2865L14 1.73433L12.7628 0.5L7.203 6.05217C7.1483 6.10685 7.07413 6.13756 6.99679 6.13756C6.91945 6.13756 6.84528 6.10685 6.79058 6.05217L1.23725 0.505833L-5.42349e-08 1.74075Z" fill="#1E1E1E"/>
                    </svg>
                </div>
            </section>
        </section>
    )
}