import {Routes, Route} from 'react-router-dom'
import Blog from "./components/Blog"
import BlogCreate from "./components/BlogCreate"
import BlogDetails from "./components/BlogDetails"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {


  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/create' element={<BlogCreate/>}/>
          <Route path='/blog/details/:id' element={<BlogDetails/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
