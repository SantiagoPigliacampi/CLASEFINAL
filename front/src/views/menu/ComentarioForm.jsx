const ComentarioForm = (props) => {
    return(

        <form onSubmit={props.handleAddComment}>
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
    )
}

export default ComentarioForm ;