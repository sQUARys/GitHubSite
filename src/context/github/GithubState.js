import React, {useReducer} from "react";
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from '../types'
import axios from "axios";
import {githubContext} from "./githubContext";


const CLIENT_ID = "Iv1.f50d40c6e95b4e3c"
const CLIENT_SECRET = "6b0d792c76914427941f9bc41355e339ad013cc7"

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({children}) => {

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer , initialState)

    const search = async value =>{
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`
            ))

        dispatch({
                type: SEARCH_USERS,
                payload: response.data.items
            }
        )
    }

    const getUser = async name => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        )

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=9&`)
        )

        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS})

    const setLoading = () => dispatch({type: SET_LOADING})

    const {user, users, repos, loading} = state

    return (
        <githubContext.Provider value={{
            setLoading, search, getUser, getRepos, clearUsers,
            user, users, repos, loading
        }}>
            {children}
        </githubContext.Provider>
    )
}