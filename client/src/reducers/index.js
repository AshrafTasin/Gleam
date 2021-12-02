import { combineReducers } from 'redux';

import {authReducers} from './auth';
import blogReducers from './blogs';
import {userReducers} from './user'

export const reducers = combineReducers({
    authReducers,userReducers,blogReducers
}); 