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

export const createBlog = (blog) => async (dispatch) => {
    try {
        console.log("CREATE action e dhukse");
        const {data} = await api.createBlog(blog);
        console.log(data);
        dispatch({type:'CREATE',payload: data});
    } catch (error) {
        console.log("BLOG ERRO")
        console.log(error.message);
    }
}

export const deleteBlog = (id) => async(dispatch) => {
    try {
        console.log("Delete action e dhukse");
        await api.deleteBlog(id);
        dispatch({type:'DELETE',payload: id});
      } catch (error) {
        console.log(error.message);
      }
}