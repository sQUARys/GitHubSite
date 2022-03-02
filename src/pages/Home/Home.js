import React, {Fragment, useContext} from 'react'
import {Card} from '../../components/Card/Card'
import {githubContext} from '../../context/github/githubContext'
import {Search} from "../../components/Search/Search";
import cls from "./Home.css"

export const Home = () => {
    const {loading, users} = useContext(githubContext)

    return (

        <Fragment>
            <Search/>
            {/*<Search />*/}
            <div className={cls.container}>
                <div className={cls.row}>
                    {loading
                        ? <p>Загрузка...</p>
                        : users.map(user => (
                            <div key={user.id}>
                                <Card user={user} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </Fragment>
    )
}
