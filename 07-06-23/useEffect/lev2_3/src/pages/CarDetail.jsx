import Header from "../components/Header";
import carlist from "../data/carlist.json"
import { useParams } from "react-router-dom";

const CarDetail = () => {
    const idParams = useParams()
    const carDetail = carlist.filter((car) => {return car["id"].toString() === idParams.id})
    console.log({carDetail});

    return ( 
        <>
        <Header/>
        <h2>{carDetail[0].CarMake}</h2>
        <h2>{carDetail[0].carModel}</h2>
        <h2>{carDetail[0].CarYear}</h2>
        </>
     );
}
 
export default CarDetail;