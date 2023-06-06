import './Home.css'
import Button2 from "../components/Button2";
import Header from "../components/Header";
import '../components/Header.css'

const Home = () => {
    return ( 
        <>
        <Header/>
        <main>
            <h1>Welcome to my simple Blog</h1>
            <Button2/>
        </main>
        </>
     );
}
 
export default Home;