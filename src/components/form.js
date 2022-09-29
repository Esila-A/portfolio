import { useState, useEffect, useCallback, useRef } from "react";
import { send } from "@emailjs/browser";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

// reCaptcha //
const SubmitButton = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("");
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <button
      className="submit"
      onClick={handleReCaptchaVerify}
    >
      SEND
    </button>
  );
};

// Email JS //
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [notice, setNotice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      "service_slhxw1s",
      "template_iw2jkro",
      form,
      "08HHrMqkP6n8zMnCe"
    )
      .then(() => {
        setNotice("success");
      })
      .catch(() => {
        setNotice("error");
      });
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LePUjgiAAAAANVvoTzWBC9D_ymIvZXqlkedgEl1">
      <form id="form" className="form" onSubmit={handleSubmit}>
        <label className="form_requests">
          <p className="form_requests--text">Name</p>
          <input
            type="text"
            name="name"
            placeholder="your name"
            value={form.name}
            onChange={handleChange}
            className="form_requests--input one"
            required={true}
          />
        </label>
        <label className="form_requests">
          <p className="form_requests--text">Email</p>
          <input
            type="email"
            name="email"
            placeholder="your email"
            value={form.email}
            onChange={handleChange}
            className="form_requests--input one"
            required={true}
          />
        </label>
        <label className="form_requests">
          <p className="form_requests--text">Message</p>
          <textarea
            name="message"
            placeholder="your message"
            value={form.message}
            onChange={handleChange}
            className="form_requests--input two"
            required={true}
          />
        </label>
        {!notice ? <SubmitButton /> : ""}
        {notice === "success" ? <p className="positive">SENT</p> : ""}
        {notice === "error" ? (
          <button className="negative" onClick={handleSubmit}>
            SOMETHING WENT WRONG... TRY AGAIN
          </button>
        ) : (
          ""
        )}
      </form>
    </GoogleReCaptchaProvider>
  );
};

export default Form;
