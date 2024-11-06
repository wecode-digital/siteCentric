
import styles from "./sass/styles.module.css";
import Header from "@/public/components/Header/Header";
import LinkWhatsapp from "../linkWhatsapp/linkWhatsapp";
import Link from "next/link";

export default function Banner () {

    return (
            
            <section className={styles.banner} id="quem-somos">
                <Header/>
                <div className={styles.textsBanner}>
                    <div className={styles.tituloBanner}>
                        <h1 className={styles.tituloBanner}>Metodologia <strong className={styles.emphasiTitle}>exclusiva</strong> e atendimento <strong className={styles.emphasiTitle}>dedicado</strong> que geram resultados <strong className={styles.emphasiTitle}>excepcionais!</strong></h1>
                    </div>

                    <div className={styles.textBanner}>
                        <p>Somos especialistas em aumento de receita e maximização de ROAS através da nossa experiência em gestão de e-commerce, modelo boutique e plano de mídia personalizados.</p>
                    </div>
                </div>
                
                <div>
                    <Link className={styles.button} href="#contato">
                        Saiba mais
                    </Link>
                </div>

                <LinkWhatsapp/>
                
            </section>
           
    )
}