import "./Input.scss";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Input = ({ label, name, question }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_il22r76",
        "template_048omzp",
        form.current,
        "r2epx_k9URnp6qNnb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form
      className="form__group field"
      action="POST"
      ref={form}
      onSubmit={sendEmail}
    >
      <input
        type="input"
        className="form__field"
        placeholder="Name"
        name="answer"
        id="name"
        required
      />
      <input type="input" className="hidden" name="name" defaultValue={name} />
      <input
        type="input"
        className="hidden"
        name="question"
        defaultValue={question}
      />
      <label htmlFor="name" className="form__label" name={label}>
        {label}
      </label>
      <input type="submit" value="send" />
    </form>
  );
};