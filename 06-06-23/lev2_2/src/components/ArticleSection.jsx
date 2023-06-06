import SingleArticle from "./SingleArticle";
import './ArticleSection.css'

const ArticleSection = (props) => {
    const blogData = props.blogData
    // console.log(blogData);
       
    return ( 
        <section className="article-sec">
            {blogData.map((artikel, index) => {return <SingleArticle artikel={artikel} key={artikel.id} index={index}/>})}
        </section>
     );
}
 
export default ArticleSection;