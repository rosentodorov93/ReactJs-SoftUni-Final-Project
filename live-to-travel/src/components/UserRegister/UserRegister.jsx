import useForm from "../../hooks/useForm";
import "./UserRegister.css";

export default function UserRegister({
  registerSubmitHandler
}) {

  const {formValues, onChange, onSubmit} = useForm(registerSubmitHandler, {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  return (
    <>
      <h2 className="title">Sighn Up </h2>
      <div className="register-wrapper">
        <div className="register-container">
          <form onSubmit={onSubmit} method="post">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={onChange}
                value={formValues.firstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={onChange}
                value={formValues.lastName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                onChange={onChange}
                value={formValues.age}
              />
            </div>
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                onChange={onChange}
                value={formValues.confirmPassword}
              />
            </div>
            <div className="form-group mb-0">
              <input
                type="submit"
                value="Create Account"
                className="btn-create"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
