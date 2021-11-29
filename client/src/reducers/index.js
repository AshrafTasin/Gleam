import { combineReducers } from 'redux';

import auth from './auth';
import blogs from './blogs';
import singleBlog from './singleBlog';

export const reducers = combineReducers({
    auth,blogs,singleBlog
}); 