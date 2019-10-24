import * as actionTypes from './types';

export const setBfColor=color=>({
    type: actionTypes.SET_BGCOLOR,
    data: {
        color,
    }
})