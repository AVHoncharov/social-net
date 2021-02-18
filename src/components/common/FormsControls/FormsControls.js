import React from "react";
import style from "./FormsControls.module.css";
import { Field } from "redux-form";

export const Element = (Element) => ({ input, meta: {touched, error}, ...props }) => {
  const hasError = error && touched;

  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      <div>
        <Element {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const createField = (placeholder, name, validators, component, props = {}, text) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />{text}
    </div>
  );
};
