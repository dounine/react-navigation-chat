export default (state = { count: 0 ,value:'world'}, action) => {
    switch (action.type) {
        case 'change':
            return { ...state,value: action.value }
        default:
            return state
    }
};