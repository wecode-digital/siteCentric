import styles from "./sass/styles.module.css"

export default function Metodologia () {

    return (
        <section className={styles.sectioMetodologia}>
            <div className={styles.texts}>
                <p className={styles.titleMetodologia}>Metodologia</p>
                <h1 className={styles.title}>Saiba <span>como fazemos</span> para chegar aos <span>melhores resultados</span></h1>
                <p className={styles.text}>Dividimos as etapas do projeto de uma maneira que possamos compreender nossos clientes e entregá-los uma visão estratégica adequada.</p>
            </div>

            <section>
                {/*Aqui vai o carrossel*/}
            </section>
        </section>
    )
}