import axios from 'axios';
<<<<<<< HEAD
=======
// const url="http://localhost:5000/blogs/getBlogs";
>>>>>>> discuss works

const API = axios.create({baseURL : "http://localhost:5000"});

API.interceptors.request.use( (req) => {
    
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;

});


<<<<<<< HEAD
export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);
=======
export const fetchBlogs = () => API.get('/blogs/getBlog');
export const createBlog = (newBlog) => API.post('/blogs/createBlog',newBlog);

export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);


export const fetchDiscList = () => API.get('/discussion/getDisc');
export const createDisc = (newDisc) => API.post('/discussion/createDisc',newDisc);
>>>>>>> discuss works
