import React, { FC, ReactNode } from "react";
import style from "./FormsControls.module.css";
import { Field, WrappedFieldProps } from "redux-form";
import { ValidatorsType } from "../../../utils/validators/validators";

type ElementPropsType = {
  meta: {
    touched: boolean;
    error: string;
  };
  input: React.ReactNode;
};

export const Element = (
  Element: React.FC<ReactNode> | string
): FC<WrappedFieldProps> => ({ input, meta: { touched, error }, ...props }) => {
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

type FormFieldProps = {
  type?: string;
};



export function createField<FormKeysType extends string>(
  placeholder: string,
  name: FormKeysType,
  validators: Array<ValidatorsType>,
  component: string | React.Component | React.FC<WrappedFieldProps>,
  className?: string,
  props?: FormFieldProps,
  text?: string,
  type?: string

) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
        className={className}
        type={type}
      />
      {text}
    </div>
  );
}

export type GetStringKeys<T> = Extract<keyof T, string> 