import React, { useEffect, useState } from 'react';
import styles from "./sass/styles.module.css";
// import assert from 'assert';

type ContactInfo = {
  name: string,
  email: string,
  enterprise: string,
  phone: string,
  honeypot: string,
  message: string,
  replyTo: string,
  accessKey: string
}

export default function ContatoDesk () {
  const [contact, setContact] = useState<ContactInfo>({
    name: '',
    email: '',
    enterprise: '',
    phone: '',
    honeypot: '',
    message: '',
    replyTo: 'jullyene.ramos@wecode.digital',
    accessKey: '1089cc73-812f-4929-b781-885addb93934'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (response.type.toLowerCase().includes('success')) {
      setTimeout(() => {
        // Limpa a resposta após 5 segundos
        setResponse({ type: '', message: '' });
      }, 5000);
    }
  }, [response]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // assert(e.target.name, 'nao existe nome');
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const dataLayerEvent = (data: ContactInfo) => {
    if (typeof window.dataLayer !== 'undefined' && window.dataLayer?.push) {
      window.dataLayer.push({
        dadosCliente: {
          nome: data.name,
          empresa: data.enterprise,
          telefone: data.phone,
          email: data.email,
          mensagem: data.message
        },
        event: "submitFormCentric"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({ type: 'success', message: 'Enviado' });
        dataLayerEvent(contact);

        // Limpar os campos do formulário
        setContact({
          name: '',
          email: '',
          enterprise: '',
          phone: '',
          honeypot: '',
          message: '',
          replyTo: 'jullyene.ramos@wecode.digital',
          accessKey: '1089cc73-812f-4929-b781-885addb93934'
        });
      } else {
        setResponse({ type: 'error', message: json.message });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({ type: 'error', message: 'An error occurred while submitting the form' });
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <section className={styles.sectionContatoDesk} id='contato'>
      <div className={styles.containerDados}>
        <div className={styles.texts}>
          <p className={styles.titleContact}>Contato</p>
          
          <div className={styles.form}>
            <h1 className={styles.title}>Vamos <span>conversar!</span></h1>
            <p className={styles.text}>Preencha o formulário abaixo que entraremos em contato.</p>
          </div>
        </div>

        <form
          method="post"
          id="formstatic"
          onSubmit={handleSubmit}
          className="form_contato"
        >
          <div className={styles.group_form}>
            <div>
              <label htmlFor="name">Nome*</label>
              <input
                className={styles.items_form}
                name="name"
                type="text"
                id="name"
                required
                value={contact.name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="enterprise">Empresa*</label>
              <input
                className={styles.items_form}
                type="text"
                id="nomeEmpresa"
                name='enterprise'
                required
                value={contact.enterprise}
                onChange={handleChange}
                placeholder="Digite o nome da empresa"
              />
            </div>

            <div>
              <label htmlFor="phone">Telefone*</label>
              <input
                className={styles.items_form}
                inputMode='numeric'
                type="tel"
                id="telefone"
                name='phone'
                value={contact.phone}
                onChange={handleChange}
                placeholder="+55 (000) 9 9999-9999"
                maxLength={15}
                minLength={10}
                pattern="(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})"
              />
            </div>

            <div>
              <label htmlFor="email">E-mail*</label>
              <input
                className={styles.items_form}
                name='email'
                type="email"
                id="email"
                required
                value={contact.email}
                onChange={handleChange}
                placeholder="Digite o seu melhor e-mail"
              />
            </div>

            <div>
              <label htmlFor="suaMensagem"> Sua mensagem*</label>
              <textarea
                className={styles.items_form}
                name="message"
                id="mensagem"
                required
                value={contact.message}
                onChange={handleChange}
                placeholder="Escreva aqui sua mensagem"
              ></textarea>
            </div>

            <button className={styles.button} type="submit" disabled={isButtonDisabled}>
              {isButtonDisabled ? 'Enviado' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}