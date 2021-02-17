import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Element } from "../common/FormsControls/FormsControls";
import { required } from './../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css'

const Input = Element('input');

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
          </div>
          <div>
              <Field type='password' placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
          </div>
          <div>
              <Field type="checkbox" name={'rememberMe'} component={Input}/>Remeber me
          </div>
          {props.error && <div className={style.formSummaryError}>
            {props.error}
          </div>}
          <div>
              <button>Login</button>
          </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={`/profile`}/>
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;
