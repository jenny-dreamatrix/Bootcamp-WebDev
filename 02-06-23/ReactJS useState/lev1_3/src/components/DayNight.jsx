import { useState } from "react";
import "./DayNight.css"

const DayNight = () => {
    const [headlineTageszeit, setHeadlineTageszeit] = useState(["Tag"])
    const [buttonTageszeit, setButtonTageszeit] = useState(["Nacht"])

    const wechsel = () => {
        setHeadlineTageszeit(buttonTageszeit)
        setButtonTageszeit(headlineTageszeit)
    }

    return ( 
        <>
        <section style={headlineTageszeit == "Tag" ? {backgroundColor: "lightblue"} : {backgroundColor: "blue", color: "white"}}>
            <h1>Es ist {headlineTageszeit}</h1>
            <button onClick={wechsel}>Wechsel zu {buttonTageszeit}</button>
        </section>
        </>
     );
}

export default DayNight;