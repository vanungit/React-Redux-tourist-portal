import React from "react";
import {NavLink} from "react-router-dom";


const  TurExcursion= () => {

    return (
        <div>
            <p>Туры и экскурсии</p>
            <span><NavLink to={'/tours/:id?'}>Деталная стр, зкскурсии</NavLink> </span>
        </div>
    );
};

export default TurExcursion;
