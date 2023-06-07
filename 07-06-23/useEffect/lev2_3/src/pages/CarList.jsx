import CarItem from "../components/CarItem";
import Header from "../components/Header";
import carlist from "../data/carlist.json"
import './CarList.css'

const CarList = () => {
    return ( 
        <>
            <Header/>
            <main>
            <section>
                {carlist.map((car, index) => {return <CarItem car={car} key={index} />})}
            </section>
            </main>
        </>
     );
}

export default CarList;