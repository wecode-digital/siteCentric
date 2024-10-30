
import styles from '../Localizacao/sass/styles.module.css'

export default function Localizacao () {


    return(
        <section className={styles.sectionWhere}>
            <div className={styles.texts}>
                <p className={styles.identificacaoSection}>Onde estamos</p>
                <h1 className={styles.titleWhere}>Conheça nosso <span>escritório</span></h1>
                <p className={styles.text}>Estamos localizados em Caxias do Sul, na Serra Gaúcha, no Pátio da Estação - Rua Olavo Bilac, 503 Sala 4.</p>
            </div>

            <div className={styles.imagensWhere}>
                <img src="../../assets/png/entrada-office.png" alt="entrada" />
                <img src="../../assets/png/entrada-office2.png" alt="entrada" />
                <img src="../../assets/png/area-desenvolvimento.png" alt="entrada" />
                <img src="../../assets/png/sala-privada1.png" alt="entrada" />
                <img src="../../assets/png/sala-reunioes.png" alt="entrada" />
                <img src="../../assets/png/sala1.png" alt="entrada" />
                <img src="../../assets/png/sala-cubo.png" alt="entrada" />
                <img src="../../assets/png/sala-privada2.png" alt="entrada" />
            </div>
        </section>
    )
}
