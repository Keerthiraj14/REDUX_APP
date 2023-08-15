"use strict";

import { INFO_FETCH } from '../Actions/Types'

const INITIAL_STATE = {
    name: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INFO_FETCH:
            return { ...state, name: action.payload };
        default:
            return state;
    }
};