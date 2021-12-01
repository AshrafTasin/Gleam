export default (discussion=[], action) => {
    switch (action.type) {

    case 'FETCH_ALL':
        return action.payload;
    case 'CREATE':
        return [... discussion,action.payload];
    default:
        return discussion;
    }
}
