import SingleArticle from "./SingleArticle";
import './ArticleSection.css'

const ArticleSection = (props) => {
    const blogData = props.blogData
       
    return ( 
        <section className="article-sec">
            {blogData.map((artikel) => {return <SingleArticle artikel={artikel} key={artikel.id} />})}
        </section>
     );
}
 
export default ArticleSection;