import React from "react";
import {NavLink} from "react-router-dom";


const SelectRouting = () => {

    return (
        <div>
            <p>Подбор Маршрута</p>
            <span><NavLink to={'/routes/:id?'}>деталеое стр маршрута</NavLink> </span>

        </div>
    );
};

export default SelectRouting;
