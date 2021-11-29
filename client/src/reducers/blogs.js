export default (blogs=[], action) => {
    switch (action.type) {

    case 'FETCH_ALL':
        return action.payload;
    case 'FETCH_SINGLE':
        console.log("Ekahne  "+action.type)
        return action.payload;
    case 'CREATE':
        return [... blogs,action.payload];
    default:
        return blogs;
    }
}
