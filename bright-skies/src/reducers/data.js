const data = (
    state = {
        observations: []
    },
    action
) => {
    switch (action.type) {
        case 'LOAD':
            return {
                ...state,
                observations: action.data
            };
        default:
            return state;
    }
}

export default data;