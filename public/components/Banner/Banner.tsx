
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
                            <svg className={styles.setaSaiba} xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                <path d="M5.50714 0.690607C5.44019 0.752599 5.38706 0.826354 5.35079 0.907616C5.31453 0.988879 5.29586 1.07604 5.29586 1.16407C5.29586 1.25211 5.31453 1.33927 5.35079 1.42053C5.38706 1.50179 5.44019 1.57555 5.50714 1.63754L7.85714 3.83149L0.714286 3.83149C0.524845 3.83149 0.343164 3.90175 0.20921 4.02681C0.075255 4.15187 0 4.32148 0 4.49834C0 4.67521 0.075255 4.84482 0.20921 4.96988C0.343164 5.09494 0.524845 5.1652 0.714286 5.1652H7.85714L5.50714 7.35915C5.44019 7.42114 5.38706 7.4949 5.35079 7.57616C5.31453 7.65742 5.29586 7.74458 5.29586 7.83262C5.29586 7.92065 5.31453 8.00781 5.35079 8.08907C5.38706 8.17034 5.44019 8.24409 5.50714 8.30608C5.64097 8.43029 5.82201 8.5 6.01071 8.5C6.19942 8.5 6.38046 8.43029 6.51429 8.30608L9.57857 5.43861C9.84685 5.18964 9.99841 4.8515 10 4.49834C9.99652 4.14751 9.84511 3.81208 9.57857 3.56475L6.51429 0.697274C6.3814 0.572182 6.20089 0.501266 6.01219 0.500017C5.82348 0.498767 5.64191 0.567286 5.50714 0.690607Z" fill="white"/>
                            </svg>
                    </Link>
                </div>

                <LinkWhatsapp/>
                
            </section>
           
    )
}