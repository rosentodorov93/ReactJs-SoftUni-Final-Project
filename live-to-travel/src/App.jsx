import {Routes, Route, useNavigate} from 'react-router-dom'

import {AuthProvider} from './contexts/authContext';

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
import UserLogout from './components/UserLogout/UserLogout';

function App() {

  

  return (
    <>
      <AuthProvider>
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
            <Route path='/user/logout' element={<UserLogout/>}/>
          </Routes>
        <Footer/>
      </AuthProvider>
    </>
  )
}

export default App
