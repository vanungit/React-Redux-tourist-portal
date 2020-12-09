import React from "react";
import {NavLink} from "react-router-dom";


const Quests= () => {

    return (
        <div>
            <p>Квесты!</p>
            <span><NavLink to={'/quests/:id?'}>деталное ср квеста</NavLink>  /</span>
        </div>
    );
};

export default Quests;
