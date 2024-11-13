
import styles from './sass/styles.module.css'
import Link from 'next/link'

export default function LocalizacaoDesk () {


    return(
        <section className={styles.sectionWhereDesk} id="onde-estamos">
            <div className={styles.texts}>
                <p className={styles.identificacaoSection}>Onde estamos</p>
                <h1 className={styles.titleWhere}>Conheça nosso <span>escritório</span></h1>
                <p className={styles.text}>Estamos localizados em Caxias do Sul, na Serra Gaúcha, no Pátio da Estação - Rua Olavo Bilac, 503 Sala 4.</p>
            </div>

            <div className={styles.imagensWhere}>
                <img src="/assets/png/sala1-desktop.png" alt="entrada" />
                <img src="/assets/png/sala2-desktop.png" alt="entrada" />
                <img src="/assets/png/sala3-desktop.png" alt="entrada" />
                <img src="/assets/png/sala4-desktop.png" alt="entrada" />
                <img src="/assets/png/sala5-desktop.png" alt="entrada" />
                <img src="/assets/png/sala6-desktop.png" alt="entrada" />
                <img src="/assets/png/sala7-desktop.png" alt="entrada" />
                <img src="/assets/png/sala8-desktop.png" alt="entrada" />
                <img src="/assets/png/sala9-desktop.png" alt="" />
            </div>
        </section>
    )
}
