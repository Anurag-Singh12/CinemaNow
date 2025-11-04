import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import SeatLayout from "./pages/SeatLayout"
import MyBookings from "./pages/MyBookings"
import Favorite from "./pages/Favorite"
import Home from "./pages/Home"
import { Toaster } from 'react-hot-toast';

function App() {
  //To hide Navbar in admin page
  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Navbar/> }
      <Routes>
      {/* URL PATH */}
      <Route path='/' element = {<Home/>}/>
      <Route path='/movies' element = {<Movies/>}/>
      <Route path='/movies/:id' element = {<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element = {<SeatLayout/>}/>
      <Route path='/my-bookings' element = {<MyBookings/>}/>
      <Route path='/favorite' element = {<Favorite/>}/>
      
      </Routes>
      {!isAdminRoute && <Footer/> }
    </>
  )
}

export default App
