import styles from "./sass/styles.module.css";

function linkWhatsapp () {

    return (
        <a className={styles.whatsapp} href="https://api.whatsapp.com/send/?phone=555481110081" target="_blank">
            <img src="../../assets/svg/whats.svg" alt="icone-whatsapp" />
        </a>
    )
}

export default linkWhatsapp;