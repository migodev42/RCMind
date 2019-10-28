import * as actionTypes from './types'

export const setBgColor=color=>({
    type: actionTypes.SET_BGCOLOR,
    data: {
        color,
    }
})