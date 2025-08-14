import {Routes, Route} from "react-router-dom"
import NavBar from './pages/Navbar'
import Home from './pages/Home'
import BookSlot from './pages/BookSlot'
import Footer from "./pages/Footer"
import {Toaster} from "react-hot-toast"
function App() {

  return (
    <div className='dark:bg-black'>
    <NavBar />
    <Toaster position="top-right"/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/bookslot" element={<BookSlot/>}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
