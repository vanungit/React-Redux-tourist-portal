import React from "react";
import {NavLink} from "react-router-dom";


const MyRouts= () => {

    return (
        <div>
            <p>мои маршруты</p>
            <p><NavLink to={'/user/profile/routes/update'}>Редактирование маршрута</NavLink></p>

        </div>
    );
};

export default MyRouts;
