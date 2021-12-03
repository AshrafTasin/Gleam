import {AUTH} from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData,history) => async (dispatch) => {
    try {
        console.log("Datar age");
        const { data }  = await api.signIn(formData);
        console.log("Datar baite")
        dispatch({type: AUTH,data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};


export const signup = (formData,history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH,data});
        history.push('/verification');
    } catch (error) {
        console.log(error);
    }
};

export const verification = (userData,history) => async(dispatch) => {
    try{
        console.log(userData);
        const { data } = await api.verifyUser(userData);
        console.log(data);
        dispatch({type: 'VERIFY',data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const updateBlog = (blog) => async (dispatch) => {
    try {
      const data = await api.updateBlog(blog);
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
};

