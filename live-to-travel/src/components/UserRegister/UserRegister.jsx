import { useContext, useState } from "react";
import "./UserRegister.css";
import { PickerDropPane } from "filestack-react";
import AuthContext from "../../contexts/AuthContext";

export default function UserRegister() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const [showUpload, setShowUpload] = useState(true);
  const [ formValues, setFormValues ] = useState({
    firstName: "",
    lastName: "",
    imageLink: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) =>{
    setFormValues(state => ({...state, [e.target.name]: e.target.value}));
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(formValues)
    registerSubmitHandler(formValues);
  }


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
              <label htmlFor="age">Upload Photo</label>
              {showUpload && 
              <PickerDropPane
                apikey='AZcmoUAkqSKecIlxiW0YDz'
                pickerOptions={{
                  accept: 'image/*',
                }}
                onUploadDone={(res) => {
                  setFormValues(state => ({...state, imageLink: res.filesUploaded[0].url}))
                  setShowUpload(false);
                }
                }
              />}
              
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
