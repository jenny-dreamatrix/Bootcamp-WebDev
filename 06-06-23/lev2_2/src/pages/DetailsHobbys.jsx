import Nav from "../components/Nav";
import './Details.css'

const DetailsHobbys = (props) => {
    return ( 
        <>
        <Nav/>
        <section className="details-sec">
        <img src={props.blogData[3].img_url} alt={props.blogData[3].title} />
        <figure>
        <div>
        <h2>{props.blogData[3].title}</h2>
        <h4>{props.blogData[3].published_date}</h4>
        </div>
        <p>{props.blogData[3].description}</p>
        <figcaption>By {props.blogData[3].author}</figcaption>
        </figure>
        </section>
        </>
     );
}
 
export default DetailsHobbys;