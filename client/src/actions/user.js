import * as api from '../api/index';

export const updateuser = (updatedInfo,id) => async(dispatch) => {
    try {
        
        const { data } = await api.updateUser(updatedInfo,id);
        console.log(data);
        dispatch({type: "UPDATE",data});

    } catch (error) {
        console.log(error);
    }
}