const initialState = [];
function addPlayList(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PLAYLIST':
            return {
                ...state,
                tracks: [...state.tracks, action.playload]
            };
        case 'DELETE_PLAYLIST':
            return {
                state //no implement
    };

        default:
            return state;
    }

}

export default addPlayList;