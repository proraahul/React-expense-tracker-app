import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'; 

// Initial State
 const initialState = {
    transactions: [
        { id: 1, text: 'fruits', amount: -70 },
        { id: 2, text: 'Salary', amount: 400 },
        { id: 3, text: 'Book', amount: -50 },
        { id: 4, text: 'profit', amount: 60 }
    ]
 }

//  create Context
export const GlobalContext = createContext(initialState);

// provider Component
export const GlobalProvider = ({ children })=> {
    const[state, dispatch] = useReducer(AppReducer, initialState);
        
        //Action
        function deleteTransaction(id){
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } 

        function addTransaction(newTransaction){
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: newTransaction
            });
        } 

    return(
    <GlobalContext.Provider 
    value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}
    >
        {children}
    </GlobalContext.Provider>
    )
}