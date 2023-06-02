import "./MovieCard.css"

const MovieCard = (props) => {
    return ( 
        <article>
            <h3>{props.movie.title}</h3>
            <h3>{props.movie.year}</h3>
            <h3>{props.movie.director}</h3>
            <h3>{props.movie.duration}</h3>
            <h3>{props.movie.rate}</h3>
            <p>{props.movie.genre[0]}</p>
            <p>{props.movie.genre[1]}</p>
            <p>{props.movie.genre[2]}</p>
            <p>{props.movie.genre[3]}</p>
        </article>
     );
}
 
export default MovieCard;