import React, {useContext, useState} from 'react'
import {AlertContext} from '../../context/alert/alertContext'
import {githubContext} from '../../context/github/githubContext'
import cls from "./Search.css"

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(githubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Введите данные пользователя!')
        }
    }

    return (
        <div className={cls.page_input}>
            <input
                type="text"
                className={cls.input}
                placeholder="Введите ник пользователя..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}
