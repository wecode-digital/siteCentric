
import styles from "./sass/styles.module.css";

export default function Footer () {
    return (
        <>

        <footer className={styles.footer}>
             {/* sessão de explore */}
             <section className={styles.tituloFooter}>
                <div>
                    <p className={styles.subtituloFooter}>Explore</p>
                </div>

                <div className={styles.linksFooter}>
                    <a href="#">Quem somos</a>
                </div>

                <div className={styles.linksFooter}>
                    <a href="#">O que fazemos</a>
                </div>
               
                <div className={styles.linksFooter}>
                    <a href="#">Nossos clientes</a>
                </div>

                <div className={styles.linksFooter}>
                    <a href="#">Entre em contato</a>
                </div>  
            </section>



            {/* sessão de telefone */}
            <section className={styles.tituloFooter}>
                <div>
                    <p className={styles.subtituloFooter}>Telefone</p>
                </div>

                <div className={styles.contatoEnderecoFooter}>
                    <a href="#" target="_blank">+55 (54) 2222-0235</a>
                </div>
            </section>

            {/* sessão de endereço */}
            <section className={styles.tituloFooter}>
                <div>
                    <p className={styles.subtituloFooter}>Endereço</p>
                </div>

                <div className={styles.contatoEnderecoFooter}>
                    <p>R. Olavo Bilac, 503 - sala 4 - Rio Branco, Caxias do Sul - RS, 95010-080</p>
                </div>
            </section>

            {/* sessão de conecte-se */}
            <section className={styles.tituloFooter }>
                <div>
                    <p className={styles.subtituloFooter}>Conecte-se</p>
                </div>
                
                <div className={styles.redesFooter}>
                    <div>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.8145 1.17676H6.83182C3.61069 1.17676 1 3.78791 1 7.00858V16.9913C1 20.2124 3.61115 22.8231 6.83228 22.8231H16.8141C20.0352 22.8231 22.6464 20.212 22.6464 16.9908V7.00858C22.6464 3.78745 20.0352 1.17676 16.8141 1.17676H16.8145Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M11.8232 17.2251C14.709 17.2251 17.0483 14.8857 17.0483 12C17.0483 9.11425 14.709 6.7749 11.8232 6.7749C8.93749 6.7749 6.59814 9.11425 6.59814 12C6.59814 14.8857 8.93749 17.2251 11.8232 17.2251Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M17.7621 5.96373C18.1565 5.96373 18.4762 5.64404 18.4762 5.24969C18.4762 4.85533 18.1565 4.53564 17.7621 4.53564C17.3678 4.53564 17.0481 4.85533 17.0481 5.24969C17.0481 5.64404 17.3678 5.96373 17.7621 5.96373Z" fill="white"/>
                        </svg>
                    </a>
                    </div>

                    <div>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.1416 0.504883C5.80396 0.504883 0.646484 5.66236 0.646484 12C0.646484 18.3376 5.80396 23.4951 12.1416 23.4951C18.4792 23.4951 23.6367 18.3376 23.6367 12C23.6367 5.66236 18.4792 0.504883 12.1416 0.504883ZM12.1416 1.83104C17.4437 1.83104 22.1592 6.69788 22.1592 12C22.1616 14.2932 21.1117 16.9259 19.6148 18.6632C18.1179 20.4005 15.8354 21.7605 13.567 22.0973V14.7933H16.2952L16.7234 12.022H13.567V10.5085C13.567 9.359 13.9454 8.33689 15.0211 8.33689H16.7502V5.91908C16.4465 5.87789 15.8038 5.78881 14.5891 5.78881C12.0525 5.78881 10.5658 7.12799 10.5658 10.1799V12.022H7.95834V14.7933H10.5658V22.0733C8.32882 21.7051 5.97068 20.1906 4.50453 18.4614C3.03838 16.7322 2.02801 14.2671 2.03061 12C2.03061 6.69788 6.83948 1.83104 12.1416 1.83104Z" fill="white"/>
                            </svg>
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <g clip-path="url(#clip0_1329_571)">
                                    <path d="M5.04199 9.39746H8.38259V19.4477H5.04199V9.39746Z" fill="white"/>
                                    <path d="M6.68999 8.02564H6.71203C7.87742 8.02564 8.6021 7.2536 8.6021 6.28865C8.58007 5.30244 7.87742 4.55225 6.73387 4.55225C5.5905 4.55225 4.84302 5.30244 4.84302 6.28865C4.84302 7.2536 5.56944 8.02564 6.68999 8.02564Z" fill="white"/>
                                    <path d="M13.5714 19.4478V13.8348C13.5714 13.5337 13.5944 13.2352 13.6824 13.0204C13.9242 12.4193 14.473 11.7986 15.3966 11.7986C16.6058 11.7986 17.0887 12.7204 17.0887 14.0708V19.4476H20.4301V13.6844C20.4301 10.5976 18.7818 9.16162 16.583 9.16162C14.808 9.16162 14.0154 10.1386 13.5714 10.8217V10.8545H13.5496C13.5554 10.8437 13.5649 10.8327 13.5714 10.8217V9.39764H10.2295C10.2743 10.3404 10.2295 19.4476 10.2295 19.4476H13.5714V19.4478Z" fill="white"/>
                                    <path d="M23.6058 4.11188C23.475 3.41656 23.2189 2.78258 22.8631 2.27342C22.5072 1.76425 22.0642 1.39776 21.5782 1.21062C20.2502 0.476483 7.38428 0.116802 3.65157 1.23115C3.16555 1.41836 2.72243 1.78498 2.36658 2.29429C2.01073 2.80361 1.75464 3.43776 1.62394 4.13323C1.02421 7.89674 0.978868 16.0331 1.63886 19.8812C1.76965 20.5765 2.02578 21.2104 2.38163 21.7196C2.73747 22.2288 3.18054 22.5953 3.66649 22.7824C6.29672 23.6488 18.8011 23.7703 21.5931 22.7824C22.0791 22.5953 22.5221 22.2288 22.878 21.7196C23.2338 21.2104 23.49 20.5765 23.6208 19.8812C24.2601 15.781 24.3054 8.14884 23.6058 4.11188V4.11188Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1329_571">
                                    <rect width="24" height="24" fill="white" transform="translate(0.636719)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>

            </section>


            <section className={styles.rodapeLocalization}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="58" viewBox="0 0 56 58" fill="none">
                        <path d="M31.7753 6.13509L26.4911 12.1188C22.5376 8.16411 16.4832 7.42957 11.9691 11.943C7.45451 16.4577 8.19021 22.5114 12.1437 26.4661L6.16003 31.7492C-1.71314 23.8766 -2.09793 13.1336 5.53001 5.50507C13.1579 -2.12403 23.9015 -1.73925 31.7753 6.13451V6.13509Z" fill="white"/>
                        <path d="M33.3095 15.8472V19.8702H24.54V23.4879H32.7309V27.4239H24.54V32.084H33.3095V36.107H19.8508V15.8472H33.3095Z" fill="white"/>
                        <path d="M55.9995 15.8475V37.1204L41.9914 24.704V36.1073H37.3027V14.8345L51.2822 27.2509V15.8475H56.0001H55.9995Z" fill="white"/>
                        <path d="M0 38.8032H14.352V42.7153H9.35216V56.9383H4.97416V42.7153H0V38.8032Z" fill="white"/>
                        <path d="M22.954 38.8033C27.5913 38.8033 30.0004 41.2124 30.0004 44.7356C30.0004 47.2224 28.7567 49.1913 26.3733 50.0981L31.0882 56.9372H25.9587L22.0729 50.6417H20.7259V56.9372H16.3479V38.8027H22.954V38.8033ZM20.7259 42.5081V47.2493H22.6428C24.4044 47.2493 25.4665 46.3945 25.4665 44.8915C25.4665 43.3886 24.4044 42.5081 22.6428 42.5081H20.7259Z" fill="white"/>
                        <path d="M37.5648 38.8032V56.9377H33.1091V38.8032H37.5648Z" fill="white"/>
                        <path d="M50.5696 53.1815C53.1347 53.1815 54.7923 52.0675 55.984 50.7981V55.513C54.5074 56.6527 52.9531 57.3522 50.3104 57.3522C44.4814 57.3522 40.3621 53.5178 40.3621 47.8705C40.3621 42.2231 44.4814 38.3887 50.3104 38.3887C52.9531 38.3887 54.5074 39.0882 55.984 40.2279V44.9428C54.7923 43.6735 53.1341 42.5594 50.5696 42.5594C47.642 42.5594 45.1295 44.5283 45.1295 47.8705C45.1295 51.2126 47.6426 53.1815 50.5696 53.1815Z" fill="white"/>
                    </svg>
                </div>

                <div className={styles.textRodape}>
                    <p>Centric Marketing para E-commerce – R. Olavo Bilac, 503 - sala 4 - Rio Branco, Caxias do Sul - RS, 95010-080</p>
                </div>
            </section>

        </footer>
        </>
    )
}