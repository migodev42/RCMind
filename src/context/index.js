import React, {useReducer} from 'react'

import themeReducer, {themeInitVal} from './reducer/theme';
// import exampleBReducer, {exampleBInitVal} from './reducer/exampleB';


const context = React.createContext({});

const WrappedProvider = props => {

    const [themeState, themeDispatch] = useReducer(themeReducer, themeInitVal);
    // const [egBState, egBDispatch] = useReducer(exampleBReducer, exampleBInitVal);
    
    const combined = {
        theme: {
            state: themeState,
            dispatch: themeDispatch
        },        
        // egB: {
        //     state: egBState,
        //     dispatch: egBDispatch
        // },        
    };

    return (<context.Provider value={combined}>
        {props.children}
    </context.Provider>)
};

export {context};
export default WrappedProvider;