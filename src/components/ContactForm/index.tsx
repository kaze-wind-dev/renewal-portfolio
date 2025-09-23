"use client";
import { useActionState } from "react";
import { createFormData } from "@/app/actions/contact";
import type { formState } from "@/app/actions/contact";
import styles from "./index.module.scss";

const initialState: formState = {
  status: "initial",
  message: "",
  errorMessages: {
    lastName: "",
    firstName: "",
    email: "",
    message: "",
  },
  values: {
    lastName: "",
    firstName: "",
    email: "",
    message: "",
  },
};

const ContactForm = () => {
  const [state, action] = useActionState(
    createFormData,
    initialState
  );
  if (state.status === "success") {
    return <p>お問い合わせいただき、ありがとうございます。<br/>こちらからご返信することがありますが、あらかじめご了承ください。</p>;
  }
  return (
    <form className={`${styles["c-form"]}`} action={action}>
      
      <div className={`${styles["c-form__row"]}`}>
        <div className={`${styles["c-form__item"]}`}>
     
          <label htmlFor="lastName" className={`${styles["c-form__label"]}`}>
            姓
          </label>
          <span className={`${styles["c-form__require"]}`}>必須</span>
          <input
            type="text"
            id="lastName"
            name="lastName"
             defaultValue={state.values?.lastName || ""}
            className={`${styles["c-form__textfield"]}`}
            placeholder="山田"
          />
               {state.errorMessages?.lastName && (
            <p className={`${styles["c-form__message"]}`}>{state.errorMessages.lastName}</p>
          )}
        </div>
        <div className={`${styles["c-form__item"]}`}>
          
          <label htmlFor="firstName" className={`${styles["c-form__label"]}`}>
            名
          </label>
          <span className={`${styles["c-form__require"]}`}>必須</span>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={state.values?.firstName || ""}
            className={`${styles["c-form__textfield"]}`}
            placeholder="太郎"

          />
          {state.errorMessages?.firstName && (
            <p className={`${styles["c-form__message"]}`}>{state.errorMessages.firstName}</p>
          )}
        </div>
      </div>
      <div className={`${styles["c-form__item"]}`}>
      
        <label htmlFor="email" className={`${styles["c-form__label"]}`}>
          メールアドレス
        </label>
        <span className={`${styles["c-form__require"]}`}>必須</span>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={state.values?.email || ""}
          className={`${styles["c-form__textfield"]}`}
          placeholder="example@example.com"
        />
          {state.errorMessages?.email && (
          <p className={`${styles["c-form__message"]}`}>{state.errorMessages.email}</p>
        )}
      </div>
      <div className={`${styles["c-form__item"]}`}>
        
        <label htmlFor="message" className={`${styles["c-form__label"]}`}>
          お問い合わせ内容
        </label>
        <span className={`${styles["c-form__require"]}`}>必須</span>
        <textarea 
        id="message" 
        name="message"
        defaultValue={state.values?.message || ""}
        className={`${styles["c-form__textarea"]}`}
        placeholder="お問い合わせ内容を入力してください"
        />
        {state.errorMessages?.message && (
          <p className={`${styles["c-form__message"]}`}>{state.errorMessages.message}</p>
        )}
      </div>
      {
        state.message && (
          <div className={`${styles["c-form__message"]}`}>
            <p>{state.message}</p>
          </div>
        )
      }
      <div className={`${styles["c-form__actions"]}`}>
        <button
          type="submit"
          className={`${styles["c-form__submit-button"]}`}
        >
          送信する
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
