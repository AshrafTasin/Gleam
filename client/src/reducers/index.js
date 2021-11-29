import { combineReducers } from 'redux';

import auth from './auth';
import blogs from './blogs';

export const reducers = combineReducers({
    auth,blogs
}); 