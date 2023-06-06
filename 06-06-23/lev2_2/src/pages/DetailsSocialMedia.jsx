import Nav from "../components/Nav";
import './Details.css'

const DetailsSocialMedia = (props) => {
    return ( 
        <>
        <Nav/>
        <section className="details-sec">
        <img src={props.blogData[4].img_url} alt={props.blogData[4].title} />
        <figure>
        <div>
        <h2>{props.blogData[4].title}</h2>
        <h4>{props.blogData[4].published_date}</h4>
        </div>
        <p>{props.blogData[4].description}</p>
        <figcaption>By {props.blogData[4].author}</figcaption>
        </figure>
        </section>
        </>
     );
}
 
export default DetailsSocialMedia;