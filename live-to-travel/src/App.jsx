import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState } from 'react'

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';

import Blog from "./components/Blog/Blog"
import BlogCreate from "./components/BlogCreate/BlogCreate"
import BlogDetails from "./components/BlogDetails/BlogDetails"
import BlogEdit from "./components/BlogEdit/BlogEdit"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Profile from './components/Profile/Profile'
import UserRegister from './components/UserRegister/UserRegister'
import UserLogin from './components/UserLogin/UserLogin'

function App() {

  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async(values) =>{
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    localStorage.setItem('auth', result.accessToken)
    navigate('/');
  }
  const registerSubmitHandler = async(values) =>{
    const result = await authService.register(values);
    setAuth(result);
    localStorage.setItem('auth', result.accessToken)
    navigate('/');
  }
  const logoutHandler = () =>{
    setAuth({});
    localStorage.removeItem('auth');
  }

  const value = {
    _id: auth._id,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
  }

  return (
    <>
      <AuthContext.Provider value={value}>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/blog/create' element={<BlogCreate/>}/>
            <Route path='/blog/details/:id' element={<BlogDetails/>}/>
            <Route path='/blog/edit/:id' element={<BlogEdit/>}/>
            <Route path='/user/register' element={<UserRegister/>}/>
            <Route path='/user/login' element={<UserLogin/>}/>
          </Routes>
        <Footer/>
      </AuthContext.Provider>
    </>
  )
}

export default App
