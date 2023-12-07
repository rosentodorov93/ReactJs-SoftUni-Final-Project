import {Routes, Route} from 'react-router-dom'

import {AuthProvider} from './contexts/AuthContext';

import Blog from "./components/Blog/Blog"
import PostCreate from "./components/PostCreate/PostCreate"
import PostDetails from "./components/PostDetails/PostDetails"
import PostEdit from "./components/PostEdit/PostEdit"
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
            <Route path='/blog/' element={<Blog/>}/>
            <Route path='/blog/:category' element={<Blog/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/post/create' element={<PostCreate/>}/>
            <Route path='/post/details/:id' element={<PostDetails/>}/>
            <Route path='/post/edit/:id' element={<PostEdit/>}/>
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
