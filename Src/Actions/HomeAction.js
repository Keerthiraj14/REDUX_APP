import { INFO_FETCH } from '../Actions/Types';

export const changeUserName = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://course-api.com/javascript-store-products');
            const resp = await response.json()
            if (resp) {
                dispatch({ type: INFO_FETCH, payload: resp })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // return async (dispatch) => {
    //     dispatch({ type: INFO_FETCH, payload: name })
    // }
}