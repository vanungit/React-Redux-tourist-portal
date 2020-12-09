import React from "react";
import {NavLink} from "react-router-dom";


const Objects = () => {

    return (
        <div>
            <p>Обекты!</p>
            <span><NavLink to={'/objects/:id?'}>Деталная стр, данных</NavLink> </span>

        </div>
    );
};

export default Objects;
