import Nav from "../components/Nav";
import './Details.css'

const DetailsPets = (props) => {

    return ( 
        <>
        <Nav/>
        <section className="details-sec">
        <img src={props.blogData[0].img_url} alt={props.blogData[0].title} />
        <figure>
        <div>
        <h2>{props.blogData[0].title}</h2>
        <h4>{props.blogData[0].published_date}</h4>
        </div>
        <p>{props.blogData[0].description}</p>
        <figcaption>By {props.blogData[0].author}</figcaption>
        </figure>
        </section>
        </>
     );
}
 
export default DetailsPets;