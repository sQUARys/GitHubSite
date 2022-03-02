import React, {useContext, useEffect, Fragment} from 'react'
import {githubContext} from '../../context/github/githubContext'
import {NavLink, useParams} from 'react-router-dom'
import {Repos} from '../../components/Repos/Repos'
import cls from "./Profile.css"

export const Profile = () => {
    const {getUser, getRepos, loading, user, repos} = useContext(githubContext)
    const urlName = useParams()

    useEffect(() => {
        getUser(urlName.name)
        getRepos(urlName.name)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        name, company, avatar_url,
        location, blog,
        login, html_url, followers,
        following, public_repos
    } = user

    return (
        <div className={cls.fixed} >
            <div className={cls.toHomeDiv}>
                <NavLink className={cls.toHome} to="/">На главную</NavLink>
            </div>

            <div  className={cls.container}>
                <div>
                    <div>
                        <div className={cls.top}>
                            <img
                                src={avatar_url}
                                alt={name}
                                className={cls.img}
                            />
                            <div className={cls.MainTopic}>
                                <h1>{name}</h1>
                                {location && <p>Местоположение: {location}</p>}
                            </div>
                        </div>

                        <div className={cls.main}>
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cls.open_profile}
                            >Открыть профиль</a>

                            <div className={cls.all_info}>
                                <ul className={cls.info_list}>
                                    {login && <li>
                                        <strong>Username: </strong> {login}
                                    </li>}

                                    {company && <li>
                                        <strong>Компания: </strong> {company}
                                    </li>}

                                    {blog && <li>
                                        <strong>Website: </strong> {blog}
                                    </li>}
                                </ul>

                                <ul className={cls.github_info}>
                                    <li>Подписчики: {followers}</li>
                                    <li>Подписан: {following}</li>
                                    <li>Репозитории: {public_repos}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cls.repos}>
                    <Repos repos={repos}/>
                </div>

            </div>

        </div>
    )
}
