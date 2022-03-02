import React from 'react'
import {NavLink} from 'react-router-dom'
import cls from "./NavBar.css"

export const Navbar = () => (
    <div className= {cls.navbar}>
        <div>
            <strong>Github Поиск</strong>
        </div>
        <ul className={cls.link_list}>
            <li>
                <NavLink to="/" className={cls.nav_link}>Главная</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={cls.nav_link}>Информация</NavLink>
            </li>
        </ul>
    </div>
)
