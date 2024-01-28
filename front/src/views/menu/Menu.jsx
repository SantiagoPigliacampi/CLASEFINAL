import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./styles.css";

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">YelpCamp</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* mr-auto = Campground y New Campground a la izquierda */}
            <div className="navbar-nav mr-auto">
              <Link to="/menu/campgrounds" className="nav-link">
                Campgrounds
              </Link>
              <Link to="/menu/new-campground" className="nav-link">
                New Campground
              </Link>
            </div>
            {/* ml-auto: Login y Logout a la derecha */}
            <div className="navbar-nav ml-auto">
            <Link to="/loginRegisterForm" className="nav-link">
                Registrarme
              </Link>
              <Link to="/login" className="nav-link">
                LogIn
              </Link>
              <Link onClick={() => localStorage.removeItem("user")} to="/login" className="nav-link">
                LogOut
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menu
