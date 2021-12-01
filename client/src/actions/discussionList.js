import * as api from '../api';

<<<<<<< HEAD
//Action Creators

export const getDisc = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDiscList();

=======
export const fetchADiscussion = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchADiscussion(id);
        dispatch({type: 'FETCH_SINGLE',payload: data});
        console.log(data); } 
    catch (error) {console.log(error.message);}
}
export const getDisc = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDiscList();
>>>>>>> comment
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