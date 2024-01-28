const Comentario = (props) =>{

return(
    <div key={props.comment._id} className="card my-2">
    <div className="card-body">
      <p className="card-text">{props.comment.content}</p>      
      <p className="card-text">
        <small className="text-muted">
          <p>{props.comment.email}</p>
          {new Date(props.comment.createdAt).toLocaleDateString()}
        </small>
      </p>
    </div>
  </div>
)

}


export default Comentario;