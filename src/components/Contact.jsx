import { useRef } from "react";
import emailjs from "@emailjs/browser";
import cv from "../docs/cv.pdf";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l69pzqw",
        "template_c87py7l",
        form.current,
        "2N59lowbXlVXzuUa8"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Merci pour votre message !");
        },
        (error) => {
          console.log(error.text);
          alert("Désolé mais votre message ne s'est pas envoyé...");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__map" />
      <div className="contact__form">
        <h2 className="title">Contactez moi !</h2>
        <p>
          N'hésitez pas à me contacter si vous avez une demande ou une question.
          <br />
          <span className="little-text">
            Cliquez{" "}
            <a href={cv} download="CV_Matthieu_Dubo.pdf">
              <span className="purple-text">ici</span>
            </a>{" "}
            pour télécharger mon CV.
          </span>
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="name"
            placeholder="Nom"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            type="text"
            name="user_message"
            placeholder="Message"
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
