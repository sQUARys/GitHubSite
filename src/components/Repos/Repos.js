import React from 'react'
import cls from "./Repos.css"

export const Repos = ({repos}) => (
    <div className={cls.MainRepos}>
        {repos.map(repo => (
            <div  key={repo.id}>
                <a
                    href={repo.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={cls.link}
                >{repo.name}</a>
            </div>
        ))}
    </div>
)
