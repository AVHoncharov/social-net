import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { createField, Element } from "../common/FormsControls/FormsControls";
import { required } from './../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css'
import {login} from '../../redux/auth-reducer'
import { connect } from 'react-redux';

const Input = Element('input');

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
      <form onSubmit={handleSubmit}>
              {createField('Email', 'email', [required],Input)}
              {/* <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/> */}
              {createField('Password', 'password', [required],Input, {type: 'password'})}
              {createField(null,'rememberMe', [],Input, {type: 'checkbox'},'Remeber me')}

              {captchaUrl && <img src={captchaUrl}/>}
              {captchaUrl && createField('Type symbols from image','captcha', [required],Input, {},'')}

          {error && <div className={style.formSummaryError}>
            {error}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={`/profile`}/>
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
