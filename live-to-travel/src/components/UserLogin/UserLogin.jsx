import './UserLogin.css';

export default function UserLogin(){
    return(
        <>
            <h2 className='title'>Log In</h2>
       <div className='login-wrapper'>
         <div className="login-container" >
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name='email'/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name='password'/>
            </div>
            <div className="form-group mb-0">
              <input type="submit" value="Login" className="btn-create"/>
            </div>
          </form>
        </div>
       </div>
        </>
    )
}