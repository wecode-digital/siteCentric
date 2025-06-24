
// import { text } from "stream/consumers";
import styles from "./sass/styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg12, Svg13, Svg14, Svg15, Svg16, Svg17, Svg18, Svg19, Svg20, Svg21, Svg22, Svg23, Svg24, Svg25, Svg26, Svg27, Svg28, Svg29, Svg30, Svg31, Svg32, Svg33, Svg34, Svg35, Svg36, Svg37, Svg38, Svg39, Svg40, Svg41, Svg42, Svg43, Svg44, Svg45, Svg46, Svg47, Svg48, Svg49, Svg50, Svg51, Svg52, Svg53, Svg54, Svg55 } from "../../components/svgs/Svgs";

import logoibbl from "../../../public/assets/png/ibbl.png";
import logoandreazza from "../../../public/assets/png/andreazza.png";
import logomadesa from "../../../public/assets/png/madesa.png";
import logosantaclara from "../../../public/assets/png/santa-clara.png";
import logoamitie from "../../../public/assets/png/amitie.png";
import logochopeiraeltz from "../../../public/assets/png/chopeira-eltz.png";
import logobischoffwines from "../../../public/assets/png/bischoff-wines.png";
import logokappesberg from "../../../public/assets/png/logo-kappesberg.png";
import logokissny from "../../../public/assets/png/logo-kissNY.png";

export default function NossosClientes() {

    return (

        <section className={styles.nossosClientes} id="nossos-clientes">

            <div className={styles.textsNossosClientes}>
                <h3 className={styles.tag}>Nossos clientes</h3>
                <h2 className={styles.blockTitle}>
                    Quem <span className={styles.textHighlight}>confia</span> em nosso
                    trabalho e <span className={styles.textHighlight}>atesta</span>{" "}
                    nossa qualidade
                </h2>
            </div>

            {/*Aqui vai ter um grid de imagens dos clientes*/}


            <div className={styles.clientList}>
                {/*STIHL*/}
                <div>
                  <Svg13 />
                </div>

                {/*RONI*/}
                <div>
                  <Svg14 />
                </div>

                {/*KEKO*/}
                <div>
                  <Svg15 />
                </div>

                {/*SCHEER*/}
                <div>
                  <Svg35 />
                </div>

                {/*SOPRANO*/}
                <div>
                  <Svg3 />
                </div>

                {/*CHOPEIRA ELTZ*/}
                <div>
                  <Image
                    width="80"
                    height="28"
                    src={logochopeiraeltz}
                    alt="logo-chopeira-eltz"
                  ></Image>
                </div>

                {/*IBBL*/}
                <div>
                  <Image
                    width="60"
                    height="18"
                    src={logoibbl}
                    alt="logo-ibbl"
                  ></Image>
                </div>

                {/*OU*/}
                <div>
                  <Svg4 />
                </div>

                {/*SANREMO*/}
                <div>
                  <Svg43 />
                </div>

                {/*BETTANIN*/}
                <div>
                  <Svg47 />
                </div>

                {/*JORGE BISCHOFF*/}
                <div>
                  <Svg22 />
                </div>

                {/*BIBI*/}
                <div>
                  <Svg6 />
                </div>

                {/*PETITE JOLIE*/}
                <div>
                  <Svg19 />
                </div>

                {/*BEBECE*/}
                <div>
                  <Svg7 />
                </div>

                {/*ANSELMI*/}
                <div>
                  <Svg9 />
                </div>

                {/*PICCADILLY*/}
                <div>
                  <Svg8 />
                </div>

                {/*FIERO*/}
                <div>
                  <Svg16 />
                </div>

                {/*SUGAR SHOES*/}
                <div>
                  <Svg39 />
                </div>

                {/*FABIOLA MOLINA*/}
                <div>
                  <Svg21 />
                </div>

                {/*PITUCHINHUS*/}
                <div>
                  <Svg17 />
                </div>

                {/*CARRARO*/}
                <div>
                  <Svg1 />
                </div>

                {/*MADESA*/}
                <div>
                  <Image
                    width="80"
                    height="18"
                    src={logomadesa}
                    alt="logo-madesa"
                  ></Image>
                </div>

                {/*DJ MOVEIS*/}
                <div>
                  <Svg2 />
                </div>

                {/*KAPPESBERG*/}
                <div>
                  <Image
                    width="80"
                    height="18"
                    src={logokappesberg}
                    alt="logo-kappesberg"
                  ></Image>
                </div>

                {/*RIMO*/}
                <div>
                  <Svg33 />
                </div>

                {/*MX*/}
                <div>
                  <Svg37 />
                </div>

                {/*PISANI*/}
                <div>
                  <Svg50 />
                </div>

                {/*KISS*/}
                <div>
                  <Image
                    width="65"
                    height="25"
                    src={logokissny}
                    alt="logo-kiss-new-york"
                  ></Image>
                </div>

                {/*SANTA CLARA*/}
                <div>
                  <Image
                    width="65"
                    height="25"
                    src={logosantaclara}
                    alt="logo-santa-clara"
                  ></Image>
                </div>

                {/*OBA*/}
                <div>
                  <Svg23 />
                </div>

                {/*Andreazza*/}
                <div>
                  <Svg23 />
                </div>

                {/*3tentos*/}
                <div>
                  <Svg12 />
                </div>

                {/*Amitié*/}
                <div>
                  <Image
                    width="75"
                    height="25"
                    src={logoamitie}
                    alt="logo-amitié"
                  ></Image>
                </div>

                {/*BISCHOFF WINES*/}
                <div>
                  <Image
                    width="80"
                    height="28"
                    src={logobischoffwines}
                    alt="logo-bischoff-wines"
                  ></Image>
                </div>

                {/*Pro Chile*/}
                <div>
                  <Svg54 />
                </div>
            </div>

            <div className={styles.buttonDiv}>
                <Link className={styles.button} href="#contato">
                    Saiba mais
                </Link>
            </div>
        </section>
    )
}