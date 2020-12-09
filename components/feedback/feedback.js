import React from "react";
import {NavLink} from "react-router-dom";


const Feedback = () => {

    return (
        <div>
            <p>Обратная связ</p>
            <span><NavLink to={'/messages&ratings'}>сообшения и рейтинги</NavLink>  /</span>
        </div>
    );
};

export default Feedback;
