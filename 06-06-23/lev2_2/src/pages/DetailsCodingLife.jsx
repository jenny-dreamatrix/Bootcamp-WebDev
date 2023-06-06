import Nav from "../components/Nav";
import './Details.css'

const DetailsCodingLife = (props) => {
    return ( 
        <>
        <Nav/>
        <section className="details-sec">
        <img src={props.blogData[5].img_url} alt={props.blogData[5].title} />
        <figure>
        <div>
        <h2>{props.blogData[5].title}</h2>
        <h4>{props.blogData[5].published_date}</h4>
        </div>
        <p>{props.blogData[5].description}</p>
        <figcaption>By {props.blogData[5].author}</figcaption>
        </figure>
        </section>
        </>
     );
}
 
export default DetailsCodingLife;