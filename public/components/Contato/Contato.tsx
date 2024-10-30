import styles from "./sass/styles.module.css"
export default function Contato () {
    return (
        <section>
            <div>
                <p>Contato</p>
                <h1>Vamos <span>conversar!</span></h1>
                <p>Preencha o formulário abaixo que entraremos em contato.</p>
            </div>

            <form action="">
                
                <div>
                    <label htmlFor="nome">Nome*</label>
                    <input type="text" id="nome" placeholder="Digite seu nome completo"/>
                </div>

                <div>
                    <label htmlFor="nome">Empresa*</label>
                    <input type="text" id="nomeEmpresa" placeholder="Digite o nome da empresa"/>
                </div>

                <div>
                    <label htmlFor="nome">Telefone*</label>
                    <input type="text" id="telefone" placeholder="+55 (000) 9 9999-9999"/>
                </div>

                <div>
                    <label htmlFor="nome">E-mail*</label>
                    <input type="email" id="email" placeholder="Digite o seu melhor e-mail"/>
                </div>

                <div>
                    <label htmlFor="suaMensagem"> Sua mensagem*</label>
                    <textarea name="mensagem" id="mensagem">Escreva aqui sua mensagem</textarea>
                </div>
                
                

            </form>
        </section>
    )
}