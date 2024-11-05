import styles from '../Fundador/sass/styles.module.css'
export default function Fundador () {
    
    return(
        <section className={styles.sectionFounders} id='quem-somos'>
            <div className={styles.titles}>
                <p className={styles.titleFounders}>Fundadores</p>
                <h1 className={styles.knowFounders}>Conheça nossos <span>fundadores</span></h1>
            </div>


                <div className={styles.Founder}>
                    <div className={styles.aboutFounder}>
                        <img src="../../assets/png/fundador1.png" alt="fundador_1"/>
                        <h2 className={styles.title}>Felipe S. Soares</h2>
                    </div>
                    <p className={styles.text}>Graduado em Administração de Empresas, com MBA em Marketing Digital pela ESPM, possui mais de 14 anos de atuação no mercado de negócios digitais, com passagens por Lojas Colombo, Arezzo, ESPM e E-commerce Brasil. Conquistou premiações de Melhor Profissional de E-commerce pelo eBit e ABCOMM e atualmente é sócio da Brava, Converte, Wecode e Centric.</p>
                </div>
                
                <div className={styles.Founder}>
                    <div className={styles.aboutFounder}>
                        <img src="../../assets/png/fundador2.png" alt="fundador_2"/>
                        <h2 className={styles.title}>Adriano Sebben</h2>
                    </div>
                    <p className={styles.text}>Graduado em Engenharia de Produção pela FSG e com MBA Executivo em E-commerce pela Escola Superior de E-Commerce ESECOM. Possui mais de 5 anos no mercado de e-commerce como head de performance e gestor de operações, com mais de 30 empresas atendidas e mais de R$ 10 Milhões gerenciados em mídia paga que geraram mais de R$ 100 Milhões em vendas online.</p>
                </div>

            
        </section>
    )

}