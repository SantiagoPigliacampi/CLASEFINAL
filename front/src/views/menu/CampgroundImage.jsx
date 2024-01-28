const CampgroundImage = (props) => {

    return (
    <div className="container text-center">
            <div>
            <img
                className="img-fluid"
                src={props.campground.image || "https://via.placeholder.com/300"}
                alt={props.campground.title || "There is no image for this campground"}
            />

            <h1>{props.campground.title|| "There is no title for this campground" }</h1>
            <p>{props.campground.description || "There is no description for this campground"}</p>
            </div>
    </div>
    )
}

export default CampgroundImage