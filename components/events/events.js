import React from "react";
import {NavLink} from "react-router-dom";


const Events = () => {

    return (
        <div>
            <p>Собития</p>
            <span><NavLink to={'/events/:id?'}>деталная стр событя</NavLink> </span>
        </div>
    );
};

export default Events;
