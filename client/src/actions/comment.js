import * as api from '../api/index';

export const createComment = (comment) => async (dispatch) => {
    try {
        const data = await api.createComment(comment);
        dispatch({type:'CREATE',payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
export const getComments = () => async (dispatch) => {
    try {
        const {data} = await api.getComments();
        dispatch({type: 'FETCH_ALL',payload: data})
        console.log("got coms "+data );
    } catch (error) {
        console.log(error.message);
    }
}
