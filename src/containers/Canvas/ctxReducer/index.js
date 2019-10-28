import cloneDeep from 'lodash/cloneDeep'

export const ctxActionTypes={
    UPDATE_CTX:'ctx/update',
}

export const ctxCreator={
    updateCtx:(ctx)=>({
        type:ctxActionTypes.UPDATE_CTX,
        data:{
            ctx
        }
    })
}

const ctxReducer=(ctx,action)=>{
    switch(action.type){
        case ctxActionTypes.UPDATE_CTX:{                    
            const newCtx=cloneDeep(action.data.ctx)
            return action.data.ctx
        }            
        default:
            return ctx;
    }
}

export default ctxReducer;