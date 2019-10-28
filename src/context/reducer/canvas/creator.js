import * as actionTypes from './types';

export const initCanvas=color=>({
    type: actionTypes.SET_BGCOLOR,
    data: {
        color,
    }
})