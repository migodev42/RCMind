import * as actionTypes from './types';

/* css属性命名遵循 React Style对象 */
export const themeInitVal = {
    background: '#fff'
};

export default (canvas, action) => {
    switch (action.type) {

        case actionTypes.INIT_CANVAS: {            
            // theme = Object.assign({}, theme)
            // theme.background=action.data.color
            // return theme
        }
            break
        default:
            return canvas;
    }
};