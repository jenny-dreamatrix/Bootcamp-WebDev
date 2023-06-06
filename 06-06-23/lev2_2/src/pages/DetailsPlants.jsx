import Nav from "../components/Nav";
import './Details.css'

const DetailsPlants = (props) => {
    return ( 
        <>
        <Nav/>
        <section className="details-sec">
        <img src={props.blogData[1].img_url} alt={props.blogData[1].title} />
        <figure>
        <div>
        <h2>{props.blogData[1].title}</h2>
        <h4>{props.blogData[1].published_date}</h4>
        </div>
        <p>{props.blogData[1].description}</p>
        <figcaption>By {props.blogData[1].author}</figcaption>
        </figure>
        </section>
        </>
     );
}
 
export default DetailsPlants;