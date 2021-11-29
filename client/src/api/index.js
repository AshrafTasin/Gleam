import axios from 'axios';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// const url="http://localhost:5000/blogs/getBlogs";
>>>>>>> discuss works
=======
// const url="http://localhost:5000/blogs/getBlogs";
>>>>>>> comment
=======
// const url="http://localhost:5000/blogs/getBlogs";
>>>>>>> DiscussionWOrks

const API = axios.create({baseURL : "http://localhost:5000"});

API.interceptors.request.use( (req) => {
    
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;

});


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);
=======
=======
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
export const fetchBlogs = () => API.get('/blogs/getBlog');
export const createBlog = (newBlog) => API.post('/blogs/createBlog',newBlog);

export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);


export const fetchDiscList = () => API.get('/discussion/getDisc');
<<<<<<< HEAD
export const createDisc = (newDisc) => API.post('/discussion/createDisc',newDisc);
<<<<<<< HEAD
>>>>>>> discuss works
=======
export const fetchADiscussion = (id) => API.get('/discussion/'+id);


export const createComment = (newComm) => API.post('/comment/saveComment',newComm);
export const getComments = () => API.get('/comment/getComments');
>>>>>>> comment
=======
export const createDisc = (newDisc) => API.post('/discussion/createDisc',newDisc);
>>>>>>> DiscussionWOrks
