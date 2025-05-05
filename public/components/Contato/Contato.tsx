"use client"
import React, { useState } from 'react';
import styles from "./sass/styles.module.css";

type ContactInfo = {
  name: string;
  email: string;
  enterprise: string;
  phone: string;
  honeypot: string;
  message: string;
  replyTo: string;
  accessKey: string;
};

export default function Contato() {
  const [contact, setContact] = useState<ContactInfo>({
    name: '',
    email: '',
    enterprise: '',
    phone: '',
    honeypot: '',
    message: '',
    replyTo: 'felipe@centric.ag',
    accessKey: 'aa87328d-8939-4a40-a533-ee85e99caabf'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const mphone = (v: string) => {
    let r = v.replace(/\D/g, ""); 
    r = r.replace(/^0/, ""); 
  
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3"); 
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3"); 
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1"); 
    }
  
    return r;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    setContact(prevContact => ({
      ...prevContact,
      [name]: name === 'phone' && value.length > prevContact.phone.length ? mphone(value) : value
    }));
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

        setTimeout(() => {
          setIsButtonDisabled(false);
          setResponse({ type: '', message: '' });
        }, 3000);

      } else {
        setResponse({ type: 'error', message: json.message });
        setIsButtonDisabled(false);
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({ type: 'error', message: 'An error occurred while submitting the form' });
      setIsButtonDisabled(false);
    }
  };

  return (
    <section className={styles.sectionContato} id='contato'>
      <div className={styles.containerDados}>
        <div className={styles.texts}>
          <p className={styles.titleContact}>Contato</p>
          <h1 className={styles.title}>Vamos <span>conversar!</span></h1>
          <p className={styles.text}>Preencha o formulário para que possamos falar com você ou entre em contato 
          pelos canais abaixo.</p>
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
                placeholder="(000) 9 9999-9999"
                maxLength={15}
                required
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