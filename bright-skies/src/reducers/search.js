const search = (
    state = {
        query: ""
    },
    action
) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                query: action.data
            };
        default:
            return state;
    }
}

export default search;