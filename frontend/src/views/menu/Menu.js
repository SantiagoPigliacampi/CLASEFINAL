import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
  const navigate = useNavigate();
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  console.log(user);

  useEffect(() => {
    !user && navigate('/login');
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleCampgrounds = () => {
    navigate('/menu/campgrounds');
  };

  const handleNewCampground = () => {
    navigate('/menu/new-campground');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            YelpCamp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* Elementos a la izquierda */}
            <div className="navbar-nav mr-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a onClick={handleCampgrounds} className="nav-link" href="/menu/campgrounds">
                Campgrounds    
              </a>
              <a onClick={handleNewCampground} className="nav-link">
                New Campground 
              </a>  
            </div>
            {/* Elementos a la derecha */}
            <div className="navbar-nav ml-auto">                       
              <a onClick={handleLogin} className="nav-link">
                    LogIn 
                </a>
                <a onClick={handleLogOut} className="nav-link">
                    LogOut
                </a>
            </div>
          </div>
        </div>
      </nav>      
    </>
  );
};

export default Menu;
