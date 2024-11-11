
import styles from "./sass/styles.module.css"
export default function Certificados () {

    return (
        <section className={styles.sectionCertificados}>
            <div className={styles.texts}>
                <p className={styles.title}>Certificados</p>
                <h1 className={styles.titleCertificados}>Especialistas <span>Certificados</span></h1>
                <p className={styles.text}>Nossos especialistas possuem certificação junto às principais plataformas e ferramentas de mídia paga, o que garante o máximo aproveitamento dos recursos, gerando assim resultados consistentes.</p>
            </div>

            <div className={styles.containerCertificados}>
                <div className={styles.boxCertificados}>
                    <img className={styles.imgCertificados} src="../../assets/png/certificado1-mobile.png" alt="certificado-meta" />
                </div>

                <div className={styles.boxCertificados}>
                    <img className={styles.imgCertificados} src="../../assets/png/certificado2-mobile.png" alt="certificado-google-partner" />
                </div>

                <div className={styles.boxCertificados}>
                    <img className={styles.imgCertificados} src="../../assets/png/certificado3-mobile.png" alt="certificado-tiktok-ads" />
                </div>

                <div className={styles.boxCertificados}>
                    <img className={styles.imgCertificados} src="../../assets/png/certificado4-mobile.png" alt="certificado-marketing-partners" />
                </div>

                <div className={styles.boxCertificados}>
                    <img className={styles.imgCertificados} src="../../assets/png/certificado5-mobile.png" alt="certificado-looker" />
                </div>

                <div className={styles.boxCertificados}>
                    <img className={styles.imgCertificados} src="../../assets/png/certificado6-mobile.png" alt="certificado-google-analytics" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado1-tag.svg" alt="certificado-google-tag-manager" />
                    <img src="../../assets/svg/certificado2-tag.svg" alt="certificado-google-tag-manager" />
                </div>

                <div className={styles.boxCertificados}>
                    <img className={styles.imgCertificados} src="../../assets/png/certificado8-mobile.png" alt="certificado-stape"/>
                </div>

                <div className={styles.boxCertificadosCenter}>
                    <img className={styles.imgCertificados} src="../../assets/svg/certificado-googleCloud.svg" alt="certificado-google-cloud"/>
                </div>
            </div>
        </section>
    )
}