import * as actionTypes from './types';

export const themeInitVal = {
    background: '#fff'
};

export default (theme, action) => {
    switch (action.type) {

        case actionTypes.SET_BGCOLOR: {            
            theme = Object.assign({}, theme)
            return theme
        }

        default:
            return theme;
    }
};