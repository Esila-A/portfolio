import { useState, useEffect, useCallback, useRef } from "react";
import { send } from "@emailjs/browser";
import { hover } from "@testing-library/user-event/dist/hover";
// import {
//   GoogleReCaptchaProvider,
//   useGoogleReCaptcha,
// } from "react-google-recaptcha-v3";

const SubmitButton = () => {
  // const { executeRecaptcha } = useGoogleReCaptcha();

  // // Create an event handler so you can call the verification on button click event or form submit
  // const handleReCaptchaVerify = useCallback(async () => {
  //   console.log("calling useGoogleRecaptcha");
  //   if (!executeRecaptcha) {
  //     console.log("Execute recaptcha not yet available");
  //     console.log();
  //     return;
  //   }
  //   console.log("Execute recaptcha available now!");

  //   const token = await executeRecaptcha("yourAction");
  //   // Do whatever you want with the token
  // }, [executeRecaptcha]);

  // // You can use useEffect to trigger the verification as soon as the component being loaded
  // useEffect(() => {
  //   handleReCaptchaVerify();
  // }, [handleReCaptchaVerify]);

  return (
    <button
      className="submit"
      //onClick={handleReCaptchaVerify}//
    >
      SEND
    </button>
  );
};

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const form = useRef();

  const [notice, setNotice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      "service_slhxw1s",
      "template_iw2jkro",
      form.current,
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
    // <GoogleReCaptchaProvider reCaptchaKey="6LfxQt0fAAAAAAWbGJoDNtHG8sXBUYvvsOS6pjt3">
    <form ref={form} id="form" className="form" onSubmit={handleSubmit}>
      <label className="form_requests">
        <p className="form_requests--text">Name</p>
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={inputs.name}
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
          value={inputs.email}
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
          value={inputs.message}
          onChange={handleChange}
          className="form_requests--input two"
          required={true}
        />
      </label>
      {!notice ? <SubmitButton /> : ""}
      {notice === "success" ? <p className="positive">SENT!</p> : ""}
      {notice === "error" ? (
        <button className="negative" onClick={handleSubmit}>
          SOMETHING WENT WRONG... TRY AGAIN!
        </button>
      ) : (
        ""
      )}
    </form>
    // </GoogleReCaptchaProvider>
  );
};

export default Form;
