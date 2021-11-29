import * as api from '../api';

//Action Creators

export const getBlogs = () => async (dispatch) => {
    try {
        const {data} = await api.fetchBlogs();
        dispatch({type: 'FETCH_ALL',payload: data})
        
    } catch (error) {
        console.log(error.message);
    }
}

export const getSingleBlog = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchSingleBlog(id);
        dispatch({type: 'FETCH_SINGLE',payload: data});
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBlog = (blog) => async (dispatch) => {
    try {
        const data = await api.createBlog(blog);
        dispatch({type:'CREATE',payload: data});
    } catch (error) {
        console.log(error.message);
    }
}