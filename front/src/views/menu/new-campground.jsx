import { useState } from "react"
import {  toast } from "react-toastify";


const NewCampground = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      //alert("Post creado correctamente")   
      toast.success("Post creado correctamente");
      setForm({
        title: "",
        description: "",
        image: "",
      })   
    }
  }

  return (
  
    <div className="min-vh-100">
      <h1 className="text-center">New Campground</h1>

      <form onSubmit={handleSubmit} className="w-25 mx-auto">
        <div>
          <label htmlFor="title" className="form-label">
            Titulo
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            Descripcion
          </label>
          <input
            className="form-control"
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="image" className="form-label">
            Imagen
          </label>
          <input
            className="form-control"
            type="text"
            id="image"
            name="image"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success text-center w-100 mt-2"
        >
          Crear Post
        </button>
      </form>
    </div>
  )
}

export default NewCampground


