import * as actionTypes from './types';
import tree from '@assets/mindmap/data';

export const treeInitVal = tree || {}


export default (tree, action) => {
    switch (action.type) {

        case actionTypes.UPDATE_TREE:           
            return action.data.tree;            
        
        default:
            return tree;
    }
};