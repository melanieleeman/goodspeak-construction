import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css"

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpwdepod");
  if (state.succeeded) {
    return <p className="success">Merci ! Votre demande a bien été envoyée.</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        {/*<label htmlFor="email">*/}
        {/*  Adresse e-mail*/}
        {/*</label>*/}
        <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
        />
        <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
        />
        {/*<label htmlFor="message">*/}
        {/*  Message*/}
        {/*</label>*/}
        <textarea
            id="message"
            name="message"
            placeholder="Votre demande"
        />
        <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
        />
        <button className={"primary"} type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
  );
}