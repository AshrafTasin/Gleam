import * as api from '../api/index';

export const createComment = (comment) => async (dispatch) => {
    try {
        const data = await api.createComment(comment);
        dispatch({type:'CREATE_COMMENT',payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
export const getComments = () => async (dispatch) => {
    try {
        console.log(" here " );
        const {data} =  api.getComments();
        dispatch({type: 'FETCH_ALL_COMMENT',payload: data})
        console.log("got coms "+data );
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
