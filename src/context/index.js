import React, {useReducer} from 'react'

import themeReducer, {themeInitVal} from './reducer/theme';
import treeReducer, {treeInitVal} from './reducer/tree';
// import exampleBReducer, {exampleBInitVal} from './reducer/exampleB';


const context = React.createContext({});

const WrappedProvider = props => {

    const [themeState, themeDispatch] = useReducer(themeReducer, themeInitVal);
    const [treeState, treeDispatch] = useReducer(treeReducer, treeInitVal);
    // const [egBState, egBDispatch] = useReducer(exampleBReducer, exampleBInitVal);

    
    const combined = {
        theme: {
            state: themeState,
            dispatch: themeDispatch
        },        
        tree: {
            state: treeState,
            dispatch: treeDispatch
        },        
    };

    return (<context.Provider value={combined}>
        {props.children}
    </context.Provider>)
};

export {context};
export default WrappedProvider;