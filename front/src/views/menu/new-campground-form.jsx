const NewCampgroundForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className="w-25 mx-auto">
        <div>
          <label htmlFor="title" className="form-label">
            Titulo
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={props.form.title}
            onChange={(e) => props.setForm({ ...props.form, title: e.target.value })}
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
            value={props.form.description}
            onChange={(e) => props.setForm({ ...props.form, description: e.target.value })}
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
            value={props.form.image}
            onChange={(e) => props.setForm({ ...props.form, image: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success text-center w-100 mt-2"
        >
          Crear Post
        </button>
      </form>
)   
}

export default NewCampgroundForm; 