import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Menu from "./views/menu/Menu"
import LoginRegisterForm from "./login/LoginRegisterForm"
import Login from "./login/Login"
import NewCampground from "./views/menu/new-campground"
import Campgrounds from "./views/menu/campgrounds"
import Footer from "./views/menu/footer"
import Campground from "./views/menu/Campground"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Navigate to="/menu/campgrounds" replace={true} />}
        />
        <Route path="/menu/new-campground" element={<NewCampground />} />
        <Route path="/menu/campgrounds" element={<Campgrounds />} />
        <Route path="/menu/campgrounds/:id" element={<Campground />} />
        <Route path="/loginRegisterForm" element={<LoginRegisterForm />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
