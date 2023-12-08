import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Toaster } from "react-hot-toast";

import useForm from "../../hooks/useForm";
import * as validator from '../../utils/validator';

import "./UserLogin.css";


const formKeys = {
  email: "email",
  password: "password",
};

export default function UserLogin(){

  const {loginSubmitHandler} = useContext(AuthContext);
  const {formValues, onChange, onSubmit, errors} = useForm(loginSubmitHandler, {[formKeys.email]:'',[formKeys.password]:''}, validator.loginForm);

  return (
    <>
      <Toaster/>
      <h2 className="title">Log In</h2>
      <div className="login-wrapper">
        <div className="login-container">
          <form onSubmit={onSubmit} method="post">
            <div className="form-group">
              <label htmlFor={formKeys.email}>Email</label>
              <input
                type="text"
                className="form-control"
                id={formKeys.email}
                name={formKeys.email}
                onChange={onChange}
                value={formValues.email}
              />
              {errors.email && errors.email.map(e => <div className="err-box" key={e}><span>{e}</span></div>)}
            </div>
            <div className="form-group">
              <label htmlFor={formKeys.password}>Password</label>
              <input
                type={formKeys.password}
                className="form-control"
                id={formKeys.password}
                name={formKeys.password}
                onChange={onChange}
                value={formValues.password}
              />
              {errors.password && errors.password.map(e => <div className="err-box" key={e}><span>{e}</span></div>)}
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn-create" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
