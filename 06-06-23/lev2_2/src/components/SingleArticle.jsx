import Button from "./Button";
import './SingleArticle.css'

const SingleArticle = (props) => {

    return ( 
        <article>
            <img src={props.artikel.img_url} alt={props.artikel.title} />
            <h3>{props.artikel.title}</h3>
            <Button path={props.artikel.path} />
        </article>
     );
}

export default SingleArticle;