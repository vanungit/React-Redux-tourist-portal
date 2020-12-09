import {SET_LIKES} from "../types/types";
import {actions} from "../actions/actions";

const initialState = {

};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIKES:
            return {
                ...state,
                like: action.payload
            }
        default:
            return state;
    }
};
export const GetLikes = () => {
    // return async (dispatch) => {
    //     let response = await GetLikesApi(elementId,elementType);
    //     dispatch(actions.SetLikes(response))
    // }
}




