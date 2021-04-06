import React, { FC } from "react";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  Element,
  GetStringKeys,
} from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import style from "../common/FormsControls/FormsControls.module.css";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

let Input = Element("input");

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFromVapluesTypeKeys>("Email", "email", [required], Input)}
      {/* <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/> */}
      {createField<LoginFromVapluesTypeKeys>("Password", "password", [required], Input, '',{},'','password')}
      {createField<LoginFromVapluesTypeKeys>(
        "",
        "rememberMe",
        [],
        Input,
        '',{},"Remeber me",'checkbox'
        
      )}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField<LoginFromVapluesTypeKeys>(
          "Type symbols from image",
          "captcha",
          [required],
          Input,
          '',
          {},
          ""
        )}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFromVapluesTypeKeys = GetStringKeys<LoginFormValuesType>;

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);

type MapStatePropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};

type MapDispatchPropType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

const Login: FC<MapStatePropsType & MapDispatchPropType> = (props) => {
  function onSubmit(formData: LoginFormValuesType) {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  }

  if (props.isAuth) {
    return <Redirect to={`/profile`} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
