import * as api from '../api';

//Action Creators

export const getDisc = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDiscList();

        dispatch({type: 'FETCH_ALL',payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const createDisc = (disc) => async (dispatch) => {
    try {
        const data = await api.createDisc(disc);
        dispatch({type:'CREATE',payload: data});
    } catch (error) {
        
    }
}