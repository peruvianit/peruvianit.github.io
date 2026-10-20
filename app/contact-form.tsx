"use client";

import { FormEvent, useState } from "react";
import "noty/lib/noty.css";

const EMAILJS_SERVICE_ID = "service_zjmgute";
const EMAILJS_TEMPLATE_ID = "template_6fmft0a";
const EMAILJS_PUBLIC_KEY = "L-XOeip51LSBOlH5p";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const nameIsValid = values.name.trim().length >= 3 && /^[\p{L}]+(?:[ '\u002D][\p{L}]+)*$/u.test(values.name.trim());
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
  const messageIsValid = values.message.trim().length >= 50;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors: string[] = [];
    if (!nameIsValid) errors.push("Il nome deve contenere solo lettere e avere almeno 3 caratteri.");
    if (!emailIsValid) errors.push("Inserisci un indirizzo email valido.");
    if (!messageIsValid) errors.push("Il messaggio deve contenere almeno 50 caratteri.");

    const isInvalid = errors.length > 0;
    setSubmitted(true);
    if (isInvalid) {
      import("noty").then(({ default: Noty }) => {
        Noty.closeAll();
        errors.forEach((message) => {
          new Noty({ type: "error", text: message, timeout: 4500, layout: "topRight", closeWith: ["button"] }).show();
        });
      });
      return;
    }

    try {
      const [{ send }, { default: Noty }] = await Promise.all([import("@emailjs/browser"), import("noty")]);
      await send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      Noty.closeAll();
      new Noty({ type: "success", text: "Messaggio inviato correttamente.", timeout: 4500, layout: "topRight", closeWith: ["button"] }).show();
      setValues({ name: "", email: "", message: "" });
      setSubmitted(false);
    } catch {
      const { default: Noty } = await import("noty");
      Noty.closeAll();
      new Noty({ type: "error", text: "Non è stato possibile inviare il messaggio. Riprova più tardi.", timeout: 4500, layout: "topRight", closeWith: ["button"] }).show();
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <label className={submitted && !nameIsValid ? "field-invalid" : ""}>
        <span>Nome</span>
        <input type="text" name="name" autoComplete="name" value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} />
      </label>
      <label className={submitted && !emailIsValid ? "field-invalid" : ""}>
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} />
      </label>
      <label className={submitted && !messageIsValid ? "field-invalid" : ""}>
        <span>Messaggio</span>
        <textarea name="message" rows={5} value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} />
      </label>
      <button type="submit">Invia messaggio <strong>↗</strong></button>
    </form>
  );
}
