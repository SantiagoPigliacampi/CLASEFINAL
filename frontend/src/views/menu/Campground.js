import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Campground = () => {
  const { id } = useParams()
  const [campground, setCampground] = useState({})
  const [comments, setComments] = useState([])

  const handleAddComment = async (e) => {
    e.preventDefault()
    const content = e.target.elements.content.value
    if (!content) return
    try {
      const res = await fetch(`http://localhost:8080/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      })
      const data = await res.json()
      setComments(data)
      e.target.reset()
    } catch (error) {
      console.log(error)
      alert("Error al crear el comentario")
    }
  }

  useEffect(() => {
    const getCampground = async () => {
      const res = await fetch(`http://localhost:8080/posts/${id}`)
      const data = await res.json()
      setCampground(data)
    }

    const getComments = async () => {
      const res = await fetch(`http://localhost:8080/comments/${id}`)
      const data = await res.json()
      setComments(data)
    }
    getCampground()
    getComments()
  }, [id])

  return (
    <div>
      <div className="container text-center">
        <div>
          <img
            className="img-fluid"
            src={campground.image}
            alt={campground.title}
          />

          <h1>{campground.title}</h1>
          <p>{campground.description}</p>
        </div>
      </div>
      <div className="container border-top">
        <div className="col-md-12 text-center w-50 mx-auto">
          <form onSubmit={handleAddComment}>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary my-2">
                Agregar comentario
              </button>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="row border-top">
          <div className="col-md-12 text-center">
            <h1>Comentarios</h1>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment._id} className="card my-2">
                  <div className="card-body">
                    <p className="card-text">{comment.content}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </small>
                    </p>
                  </div>
                </div>
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
