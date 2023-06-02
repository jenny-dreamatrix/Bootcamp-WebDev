import { useState } from "react";
import "./EmailList.css"

const EmailList = () => {
    const [valueVorname, setValueVorname] = useState([])
    const [valueNachname, setValueNachname] = useState([])
    const [valueEmail, setValueEmail] = useState([])

    return (  
        <>
        <section>
            <input onChange={(e) => setValueVorname(e.target.value)} type="text" id="vorname" />
            <input onChange={(e) => setValueNachname(e.target.value)} type="text" id="nachname"/>
            <input onChange={(e) => setValueEmail(e.target.value)} type="email" id="email"/>
            <p>Vorname: {valueVorname}</p>
            <p>Nachname: {valueNachname}</p>
            <p>Email: {valueEmail}</p>
        </section>
        </>
    );
}
 
export default EmailList;