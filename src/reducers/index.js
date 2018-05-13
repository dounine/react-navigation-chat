const initState = {
    count: 0 ,
    fetchUserLoading:false,
    value:'world'
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'change':
            return { ...state,value: action.value };
        case 'USER_FETCH_REQUEST':
            return { ...state,fetchUserLoading:true};
        case 'USER_FETCH_SUCCEEDED':
            return {...state,value:action.user.items[0].id,fetchUserLoading:false}
        default:
            return state
    }
};