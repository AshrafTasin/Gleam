import axios from 'axios';

const API = axios.create({baseURL : "http://localhost:5000"});

API.interceptors.request.use( (req) => {
    
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;

});


export const fetchBlogs = () => API.get('/blogs/getBlog');
export const createBlog = (newBlog) => API.post('/blogs/createBlog',newBlog);
export const fetchSingleBlog = (id) => API.get('/blogs/'+id);
export const upload = (data) => API.post('/blogs/upload',data);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`)
export const updateBlog = (blog) => API.put(`/blogs/${blog._id}`, blog);

export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);
export const updateUser = (updatedInfo) => API.put('/users/'+updatedInfo.id,updatedInfo);