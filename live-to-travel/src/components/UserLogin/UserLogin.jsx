import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";
import "./UserLogin.css";

const formKeys = {
  email: "email",
  password: "password",
};

export default function UserLogin(){

  const {loginSubmitHandler} = useContext(AuthContext);
  const {formValues, onChange, onSubmit} = useForm(loginSubmitHandler, {email:'',password:''});

  return (
    <>
      <h2 className="title">Log In</h2>
      <div className="login-wrapper">
        <div className="login-container">
          <form onSubmit={onSubmit} method="post">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChange}
                value={formValues.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
                value={formValues.password}
              />
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
