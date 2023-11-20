import './UserRegister.css';

export default function UserRegister(){
    return(
        <>
            <h2 className='title'>Sighn Up </h2>
       <div className='register-wrapper'>
         <div className="register-container" >
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" name='firstName' />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" name='lastName' />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" className="form-control" id="age" name='age'/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name='email'/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name='password'/>
            </div>
            <div className="form-group">
              <label htmlFor="conformPassword">Confirm Password</label>
              <input type="password" className="form-control" id="conformPassword" name='conformPassword'/>
            </div>
            <div className="form-group mb-0">
              <input type="submit" value="Create Account" className="btn-create"/>
            </div>
          </form>
        </div>
       </div>
        </>
    )
}