import React from "react";
import {NavLink} from "react-router-dom";


const UserProfile = () => {

    return (
        <div>
            <p>личный кабинет</p>
            <p><NavLink to={'/user/settings'}>настройка профиля</NavLink></p>
            <p><NavLink to={'/user/rewards'}>мои награды</NavLink></p>
            <p><NavLink to={'/user/routes'}>Мои мрошуты</NavLink></p>
            <p><NavLink to={'/user/quests'}>мои квесты</NavLink></p>
            <p><NavLink to={'/user/favorites'}>избранное</NavLink></p>
        </div>
    );
};

export default UserProfile;
