import {Routes, Route} from 'react-router-dom'
import Blog from "./components/Blog/Blog"
import BlogCreate from "./components/BlogCreate/BlogCreate"
import BlogDetails from "./components/BlogDetails/BlogDetails"
import BlogEdit from "./components/BlogEdit/BlogEdit"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"

function App() {


  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/create' element={<BlogCreate/>}/>
          <Route path='/blog/details/:id' element={<BlogDetails/>}/>
          <Route path='/blog/edit/:id' element={<BlogEdit/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
