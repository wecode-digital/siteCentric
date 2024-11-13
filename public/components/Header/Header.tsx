"use client"

import styles from "./sass/styles.module.scss";
import Menu from "../Menu/Menu";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Header() {
   
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  console.table(menuOpen)
  

  const abreMenu = () => {
    setTimeout(function() {
      setMenuOpen(prevstate => !prevstate);
      console.log("cliquei",menuOpen);
    },);
  };


  useEffect(() => {
    const scrollPage = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", scrollPage);

    return () => {
      window.removeEventListener("scroll", scrollPage);
    };
  }, []);

  return (
    <>
      <section
        ref={headerRef}
        className={`${styles.header} ${isScrolled ? styles.scrollDiferent : ""}`}
      >
        <div>
          <svg
            className={styles.svgIconeHeader}
            xmlns="http://www.w3.org/2000/svg"
            width=" 90.943px"
            height="93.139px"
            viewBox="0 0 91 94"
            fill="none"
          >
            <path d="M51.6027 9.96328L43.0212 19.6807C36.6008 13.2584 26.7686 12.0655 19.4379 19.3953C12.1062 26.727 13.301 36.5582 19.7214 42.9805L10.004 51.5601C-2.7819 38.7752 -3.40679 21.3287 8.98085 8.94014C21.3685 -3.44939 38.8159 -2.82451 51.6027 9.96233V9.96328Z" fill="white"/>
            <path d="M54.0937 25.7358V32.2691H39.8523V38.1443H53.154V44.5363H39.8523V52.1041H54.0937V58.6374H32.2371V25.7358H54.0937Z" fill="white"/>
            <path d="M90.9423 25.736V60.2827L68.1934 40.1187V58.6376H60.5791V24.0908L83.2815 44.2549V25.736H90.9432H90.9423Z" fill="white"/>
            <path d="M0 63.0159H23.3074V69.369H15.1877V92.4669H8.07794V69.369H0V63.0159Z" fill="white"/>
            <path d="M37.2773 63.0156C44.8081 63.0156 48.7205 66.928 48.7205 72.6496C48.7205 76.6881 46.7008 79.8855 42.8301 81.3581L50.4871 92.4647H42.1569L35.8464 82.2409H33.6589V92.4647H26.5491V63.0146H37.2773V63.0156ZM33.6589 69.0321V76.7317H36.7719C39.6327 76.7317 41.3575 75.3435 41.3575 72.9028C41.3575 70.462 39.6327 69.0321 36.7719 69.0321H33.6589Z" fill="white"/>
            <path d="M61.0045 63.0159V92.4659H53.7686V63.0159H61.0045Z" fill="white"/>
            <path d="M82.1243 86.3656C86.2898 86.3656 88.9818 84.5564 90.9172 82.4949V90.1519C88.5191 92.0028 85.9949 93.1388 81.7033 93.1388C72.2371 93.1388 65.5474 86.9118 65.5474 77.7405C65.5474 68.5693 72.2371 62.3423 81.7033 62.3423C85.9949 62.3423 88.5191 63.4783 90.9172 65.3292V72.9861C88.9818 70.9247 86.2889 69.1155 82.1243 69.1155C77.3699 69.1155 73.2896 72.3129 73.2896 77.7405C73.2896 83.1682 77.3708 86.3656 82.1243 86.3656Z" fill="white"/>
          </svg>
        </div>

        <div id="buttonHamburguer" onClick={abreMenu} className={styles.buttonHamburguer}>
          <svg
          className={styles.hamburguerSvg}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1329_616)">
              <path d="M24 11H0V13H24V11Z" fill="white" />
              <path d="M24 4H0V6H24V4Z" fill="white" />
              <path d="M24 18H0V20H24V18Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1329_616">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={styles.itemsMenuDesk}>
          <ul>
            <li className={styles.listItems}>
              <Link href="#nossos-clientes">Nossos clientes</Link>
              <Link href="#quem-somos">Quem somos</Link>
              <Link href="#onde-estamos">Onde Estamos</Link>
              <Link href="#proposito">Propósito</Link>
              {/* <Link href="#certificados">Certificados</Link> */}
              <Link href="#metodologia">Metodologia</Link>
              {/* <Link href="#como-fazemos">Soluções</Link> */}
              <Link href="#contato">Contato</Link>
            </li>
          </ul>
        </div>
      </section>

      {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
    </>
  );
}