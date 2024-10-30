
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
                    <img src="../../assets/svg/certificado-meta.svg" alt="certificado-meta" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado-googlePartner.svg" alt="certificado-google-partner" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado-tiktok.svg" alt="certificado-tiktok-ads" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado-pinterest.svg" alt="certificado-marketing-partners" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado-looker.png" alt="certificado-looker" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado-analytics.svg" alt="certificado-google-analytics" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado1-tag.svg" alt="certificado-google-tag-manager" />
                    <img src="../../assets/svg/certificado2-tag.svg" alt="certificado-google-tag-manager" />
                </div>

                <div className={styles.boxCertificados}>
                    <img src="../../assets/svg/certificado-stape.svg" alt="certificado-stape"/>
                </div>

                <div className={styles.boxCertificadosCenter}>
                    <img src="../../assets/svg/certificado-googleCloud.svg" alt="certificado-google-cloud"/>
                </div>
            </div>
        </section>
    )
}