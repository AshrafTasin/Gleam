export default (blogs=[], action) => {
    switch (action.type) {

    case 'FETCH_ALL':
        return action.payload;
    case 'DELETE':
        return blogs.filter((blog) => blog._id ===! action.payload);
    case 'CREATE':
        return [... blogs,action.payload];
    default:
        return blogs;
    }
}
