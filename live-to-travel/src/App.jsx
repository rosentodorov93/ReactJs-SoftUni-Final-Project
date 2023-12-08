import {Routes, Route} from 'react-router-dom'

import {AuthProvider} from './contexts/AuthContext';
import Path from './common/paths';

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
import LoggedInGuard from './components/Guards/LoggedInGuard';
import AuthGuard from './components/Guards/AuthGuard';
import NotFound from './components/NotFound/NotFound';
import ErrorPage from './components/ErrorPage/ErrorPage';


function App() {

  return (
    <>
      <AuthProvider>
        <Header/>
          <Routes>
            <Route path={Path.Home} element={<Home/>}/>
            <Route path={Path.Blog} element={<Blog/>}/>
            <Route path={Path.BlogCategory} element={<Blog/>}/>
            <Route path={Path.PostDetails} element={<PostDetails/>}/>

            <Route element={<AuthGuard/>}>
              <Route path={Path.Profile} element={<Profile/>}/>
              <Route path={Path.PostCreate} element={<PostCreate/>}/>
              <Route path={Path.PostEdit} element={<PostEdit/>}/>
              <Route path={Path.Logout} element={<UserLogout/>}/>
            </Route>

            <Route element={<LoggedInGuard/>}>
              <Route path={Path.Login} element={<UserLogin/>}/>
              <Route path={Path.Register} element={<UserRegister/>}/>
            </Route>
            <Route path={Path.Error} element={<ErrorPage/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </AuthProvider>
    </>
  )
}

export default App
