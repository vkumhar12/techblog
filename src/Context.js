/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';

const API = 'http://hn.algolia.com/api/v1/search?'

const initialState = {
    isLoading: false,
    query: "",
    nbPages: 0,
    page: 0,
    hits: []
}
const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchApiData = async (url) => {

        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data, "data")
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    const removePost = (id) => {
        dispatch({
            type: "REMOVE_POST",
            payload: id
        })
    }
    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEACRH_POST",
            payload: searchQuery,
        })
    }
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        })
    }
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])


    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };

