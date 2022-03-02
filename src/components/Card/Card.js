import React from 'react'
import {NavLink} from 'react-router-dom'
import cls from './Card.css'

export const Card = ({user}) => (
    <div className={cls.card}>
        <img src={user.avatar_url} alt={user.login} className={cls.card_img_top} />
        <div className={cls.card_body}>
            <h5>User login : {user.login}</h5>
            <NavLink  to={'/profile/' + user.login} className={cls.link}>Открыть</NavLink>
        </div>
    </div>
)
