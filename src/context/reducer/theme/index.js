import * as actionTypes from './types';

/* css属性命名遵循 React Style对象 */
export const themeInitVal = {
    background: '#fff'
};

export default (theme, action) => {
    switch (action.type) {

        case actionTypes.SET_BGCOLOR: {            
            theme = Object.assign({}, theme)
            theme.background=action.data.color
            return theme
        }

        default:
            return theme;
    }
};