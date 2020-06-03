import axios from 'axios';
import * as types from './action-types';
import { first } from 'underscore';
import config from '../config.json';

export const fetchNews = (id) => {
    return (dispactch) => {
        dispactch(fetchNewsRequest)
        axios.get(`${config.config.newsUrlBase}/news/category/${id}?page=1`)
            .then(response => {
                const dataNews = (first(response.data, 10));
                dispactch(fetchNewsSucces(dataNews))
            })
            .catch(error => {
                const errorMsg = error.payload
                dispactch(fetchNewsFailure(errorMsg))
            })
    }
}

export const fetchNewsLatest = (dateStr) => { 
    return (dispactch) => {
        dispactch(fetchNewsRequest)
        let today = new Date
        if (dateStr === null || dateStr === "" || typeof dateStr === 'undefined') {
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            dateStr = yyyy + '-' + mm + '-' + dd;
        }
        axios.get(`${config.config.newsUrlBase}/latest/${dateStr}?page=1`)
            .then(response => {
                const date = (first(response.data, 10));
                dispactch(fetchNewsSucces(date))
            })
            .catch(error => {
                const errorMsg = error.payload
                dispactch(fetchNewsFailure(errorMsg))
            })
    }
}

export const fetchSearch = (searchParams) => {
    return (dispactch) => {
        dispactch(fetchNewsRequest)
        axios.get(`${config.config.newsUrlBase}/search/${searchParams}?page=1`)
            .then(response => {
                const params = (first(response.data, 10));
                dispactch(fetchNewsSucces(params))
            })
            .catch(error => {
                const errorMsg = error.payload
                dispactch(fetchNewsFailure(errorMsg))
            })
    }
}

export const fetchNewsSucces = (dataNews, date,params) => {
    return {
        type: types.FETCH_NEWS_SUCCESS,
        payload: {
            dataNews,
            date,
            params
        }
    }
}

export const fetchNewsFailure = (error) => {
    return {
        type: types.FETCH_NEWS_FAILURE,
        payload: error
    }
}

export const fetchNewsRequest = (error) => {
    return {
        type: types.FETCH_NEWS_REQUEST,
        error
    }
}



export default { fetchNews, fetchNewsLatest, fetchNewsSucces, fetchNewsFailure, fetchNewsRequest,fetchSearch }
