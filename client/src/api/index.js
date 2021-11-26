import axios from 'axios';
const URL="http://localhost:5000";

const API = axios.create({baseURL : "http://localhost:5000"});

API.interceptors.request.use( (req) => {
    
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;

});


export const fetchBlogs = () => axios.get(URL);
export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);