
import styles from '../Localizacao/sass/styles.module.scss'

export default function Localizacao () {


    return(
        <section className={styles.sectionWhere}>
            <div className={styles.texts}>
                <p className={styles.identificacaoSection}>Onde estamos</p>
                <h1 className={styles.titleWhere}>Conheça nosso <span>escritório</span></h1>
                <p className={styles.text}>Estamos localizados em Caxias do Sul, na Serra Gaúcha, no Pátio da Estação - Rua Olavo Bilac, 503 Sala 4.</p>
            </div>

            <div className={styles.imagensWhere}>
                <img src="../../assets/png/ondeEstamos1.png" alt="entrada" />
                <img src="../../assets/png/ondeEstamos2.png" alt="entrada" />
                <img src="../../assets/png/ondeEstamos3.png" alt="entrada" />
                <img src="../../assets/png/ondeEstamos4.png" alt="entrada" />
                <img src="../../assets/png/ondeEstamos5.png" alt="entrada" />
                <img src="../../assets/png/ondeEstamos6.png" alt="entrada" />
                <img src="../../assets/png/ondeEstamos7.png" alt="entrada" />
                <img src="../../assets/png/ondeEstamos8.png" alt="entrada" />
            </div>
        </section>
    )
}
