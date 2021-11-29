export default (blog, action) => {
    switch (action.type) {
    case 'FETCH_SINGLE':
        console.log("Ekahne  "+action.type)
        return action.payload;
    default:
        return blog;
    }
}
