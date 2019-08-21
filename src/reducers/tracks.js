const initialState = [];
function addPlayList(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.playload
            ];
        case 'DELETE_TRACK':
            return state; // no implement
        case 'FETCH_TRACKS_SUCCESS':
            return action.payload;
        default:
            return state;

    }
}

export default addPlayList;