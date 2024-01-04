import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Menu from "./views/menu/Menu"
import LoginFormRegister from "./login/LoginFormRegister"
import NewCampground from "./views/menu/new-campground"
import Campgrounds from "./views/menu/campgrounds"
import Footer from "./views/menu/footer"
import Campground from "./views/menu/Campground"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/menu/new-campground" element={<NewCampground />} />
        <Route path="/menu/campgrounds" element={<Campgrounds />} />
        <Route path="/menu/campgrounds/:id" element={<Campground />} />
        <Route path="/loginFormRegister" element={<LoginFormRegister />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
