import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State - any gloabal state would go in this object (rn its just transactions)
const initialState = {
    transactions: [
        ]
}

// Create Context 
export const GlobalContext = createContext(initialState)

// Provider Component - If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context.

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //Actions - make calls to our reducer, we send type, corresponding to cases in our reducer and payload, the thing we wwant to send
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(item) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: item
        })
    }
    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>{children}</GlobalContext.Provider>);
}

// children are any components that uses the globalcontext