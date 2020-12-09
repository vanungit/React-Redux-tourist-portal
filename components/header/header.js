import React from "react";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className='header'>
                <span><NavLink to={'/search'}>поиск</NavLink>  /</span>
                <span><NavLink to={'/routes'}>подбор маршута</NavLink> </span>
            </div>
            <br/>
            <div className="header_nav">
                <span><NavLink to={'/about'}>о карте</NavLink>  /</span>
                <span><NavLink to={'/objects'}>Обекты</NavLink>  /</span>
                <span><NavLink to={'/tours'}>туры и екскурсии</NavLink>  /</span>
                <span><NavLink to={'/events'}>событя</NavLink>  /</span>
                <span><NavLink to={'/quests'}>квесты</NavLink>  /</span>
                <span><NavLink to={'/map'}>интерактивная карта</NavLink> /</span>
                <span><NavLink to={'/useful'}>полезная имформацыя</NavLink> /</span>
                <span><NavLink to={'/feedback'}>Обратная связ</NavLink> </span>
            </div>
            <br/>
            <div className="header_profile">
                <span><NavLink to={'/user/profile'}>личный кабинет</NavLink> </span>
            </div>
        </div>
    );
};

export default Header;
