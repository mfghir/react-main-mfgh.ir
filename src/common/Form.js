import { t } from "i18next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import { validation } from "./validation";

const Form = () => {
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});

  const [inpVal, setinpVal] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setinpVal({ ...inpVal, [e.target.name]: e.target.value });
    console.log(inpVal);
  };

  const touchedHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length) {
      toast.success(t("toastSucc"));
    } else {
      toast.error(t("toastErr"));
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERV,
        process.env.REACT_APP_TEMP,
        e.target,
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setinpVal({
      name: "",
      email: "",
      message: "",
    });

    setTouched({
      name: false,
      email: false,
      message: false,
    });
  };

  useEffect(() => {
    setError(validation(inpVal));
  }, [inpVal, touched]);

  return (
    <FormStyles touched={touched} inpVal={inpVal}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            required
            value={inpVal.name}
            onChange={changeHandler}
            onFocus={touchedHandler}
            placeholder={t("nameInp")}
          />
          {error.name && touched.name && <span>{error.name}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            required
            value={inpVal.email}
            onChange={changeHandler}
            onFocus={touchedHandler}
            placeholder={t("email")}
          />
          {error.email && touched.email && <span>{error.email}</span>}
        </div>

        <div>
          <textarea
            type="text"
            name="message"
            required
            value={inpVal.message}
            onChange={changeHandler}
            onFocus={touchedHandler}
            placeholder={t("messageInp")}
            // maxlength="1000"
            // minlength="200"
            rows="10"
          />
          {error.message && touched.message && <span>{error.message}</span>}
        </div>

        <button type="submit">{t("submitBtn")}</button>
      </form>
    </FormStyles>
  );
};

export default Form;

const FormStyles = styled.div`
  /* form {} */

  form div {
    margin: 10px 0;
  }

  form div span {
    color: #ff6464;
  }

  form input,
  form textarea {
    width: 100%;
    outline: none;
    border: 2px solid #ccc;

    border-radius: 8px;
    padding: 5px 10px;
  }

  form button {
    width: 100%;
    outline: none;
    border: 2px solid #47a3da;

    background: #ffffff;
    padding: 5px 10px;
    border-radius: 8px;

    cursor: pointer;
    transition: 0.4s;
  }

  form button:hover {
    background: #47a3da;
    color: #ffffff;
  }
`;
