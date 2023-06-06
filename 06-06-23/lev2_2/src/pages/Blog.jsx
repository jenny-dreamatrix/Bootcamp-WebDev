import ArticleSection from "../components/ArticleSection";
import BlogData from "../components/BlogData";
import Nav from "../components/Nav";

const Blog = (props) => {

    let blogData= props.blogData

    return ( 
        <>
        <Nav/>
        <ArticleSection blogData={blogData}/>
        </>
     );
}
 
export default Blog;