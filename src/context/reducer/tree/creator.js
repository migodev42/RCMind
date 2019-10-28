import * as actionTypes from './types';

export const updateTree=tree=>({
    type: actionTypes.UPDATE_TREE,
    data: {
        tree,
    }
})