import React, {useReducer} from 'react'

// import exampleAReducer, {exampleAInitVal} from './reducer/exampleA';
// import exampleBReducer, {exampleBInitVal} from './reducer/exampleB';


const context = React.createContext({});

const WrappedProvider = props => {

    // const [egAState, egADispatch] = useReducer(exampleAReducer, exampleAInitVal);
    // const [egBState, egBDispatch] = useReducer(exampleBReducer, exampleBInitVal);
    
    const combined = {
        // egA: {
        //     state: egAState,
        //     dispatch: egADispatch
        // },        
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