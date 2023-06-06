import Nav from "../components/Nav";
import './Details.css'

const DetailsWork = (props) => {
    return ( 
        <>
        <Nav/>
        <section className="details-sec">
        <img src={props.blogData[2].img_url} alt={props.blogData[2].title} />
        <figure>
        <div>
        <h2>{props.blogData[2].title}</h2>
        <h4>{props.blogData[2].published_date}</h4>
        </div>
        <p>{props.blogData[2].description}</p>
        <figcaption>By {props.blogData[2].author}</figcaption>
        </figure>
        </section>
        </>
     );
}
 
export default DetailsWork;