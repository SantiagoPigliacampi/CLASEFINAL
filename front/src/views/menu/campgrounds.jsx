import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { connectionData } from "../../connection/apiConnection"

const Campgrounds = () => {
  const [campgrounds, setCampgrounds] = useState([])

  const handleDelete = async (id) => {
    const res = await connectionData(`posts/${id}`, "DELETE")
    if (res.ok) {
      //alert("Posteo eliminado")
      toast.success("Posteo eliminado correctamente")
    } else {
      //alert("No se pudo eliminar el posteo")
      toast.error("No se pudo eliminar el posteo")
    }
  }

  useEffect(() => {    
    const getCampgrounds = async () => {
      try {
        const res = await connectionData('posts','GET')
        const data = await res.json()
        setCampgrounds(data)
      } catch (error) {
        console.error(error);
      }

    }
    getCampgrounds()
  },[])
  return (
    <div>
      <h1 className="text-center">Campgrounds</h1>
      <div className="container min-vh-100">
        <div className="row align-items-start gap-5 justify-content-center">
          {campgrounds.map((campground) => (
            <div
              className="d-flex flex-column col-md-3 card p-2"
              key={campground._id}
            >
              <h1>{campground.title}</h1>
              <img src={campground.image} alt={campground.image} />
              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                <Link to={`/menu/campgrounds/${campground._id}`}>
                  <button className="btn btn-info">Mas informacion</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(campground._id)}
                >
                  Eliminar Post
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Campgrounds
