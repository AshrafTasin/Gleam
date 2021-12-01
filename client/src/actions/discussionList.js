import * as api from '../api';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> DiscussionWOrks
//Action Creators

export const getDisc = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDiscList();

<<<<<<< HEAD
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
=======
>>>>>>> DiscussionWOrks
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
>>>>>>> blog/disc !
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

export const deleteDisc = (id) => async(dispatch) => {
    try {
        await api.deleteDisc(id);
        dispatch({type:'DELETE',payload: id});
        console.log("disc id "+ id+ " will be dltd");
      } catch (error) {
        console.log(error.message);
      }
}

export const updateDisc = (disc) => async (dispatch) => {
    try {
      const data = await api.updateDisc(disc);
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };