import {useContext} from 'react';
import {context} from '@context';
import * as themeAction from '@context/reducer/theme/creator';


const useTheme = () => {
    const {theme: {dispatch: themeDispatch}} = useContext(context);
    return {        
        setBgColor: (color) => {
            themeDispatch(themeAction.setBgColor(color));
        },
    }
};

export default useTheme;