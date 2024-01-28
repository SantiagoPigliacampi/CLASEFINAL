import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { connectionData } from "../../connection/apiConnection"
import Comentario from "./Comentario";
import ComentarioForm from "./ComentarioForm";
import CampgroundImage from "./CampgroundImage";

const Campground = () => {
  const { id } = useParams()
  const [campground, setCampground] = useState({})
  const [comments, setComments] = useState([])

/**
 * Create comment
 * @param {*} e
 * */

  const handleAddComment = async (e) => {
    e.preventDefault()
    const content = e.target.elements.content.value
    if (!content) return
    try {

      //get the logged in user
      const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
      const res = await connectionData(`comments/${id}`,"POST", { content})
      const data = await res.json()
      setComments(data)
      e.target.reset()
    } catch (error) {
      console.log(error)     
      toast.error("Error al crear el comentario");
      
    }
  }
/**
 * Get posts
 */
  useEffect(() => {
    const getCampground = async () => {
    try {
      const res = await connectionData(`posts/${id}`,"GET")
      const data = await res.json()
      setCampground(data)
    } catch (error) {
      console.error("error al cargar el post", error);
    }

    }

/**
 * get post's comments
 */
    const getComments = async () => {
      try {
        const res = await connectionData(`comments/${id}`,"GET")
        const data = await res.json()
        setComments(data) 
      } catch (error) {
        console.error(error)
      }

    }
    getCampground()
    getComments()
  }, [id])

  return (
    <div className="container min-vh-100">
      <CampgroundImage campground={campground}/>
      <div className="container border-top">
        <div className="col-md-12 text-center w-50 mx-auto">
        <ComentarioForm handleAddComment={handleAddComment}/>
        </div>
        <div className="row border-top">
          <div className="col-md-12 text-center">
            <h1>Comentarios</h1>
            {comments.length > 0 ? (
              comments.map((comment) => (
              <Comentario key={comment._id} comment={comment}/>
              ))
            ) : (
              <p className="text-danger">No hay comentarios</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campground
