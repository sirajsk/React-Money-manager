import React, { useContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'
const BudgetContext=React.createContext()

 

export function useBudgets(){
     return  useContext(BudgetContext)
}

export const BudgetsProvider =({children}) =>{
    const [budgets,setBugets]=useState([])
    const [expenses,setExpenses]=useState([])
    
   function getBudgetExpenses(budgetId){
       return expenses.filter(expense=>expense.budgetId===budgetId)

   }
  function  addExpense(){

  }
  function addBudget(name,max){
    setBugets(prevBudgets =>{
        return [...prevBudgets,{id:uuidv4(),name,max}]
    })
  }
  function delleteBudget(){

  }
  function deleteExpense(){

  }
    return (
         <BudgetContext.Provider value={{
             budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            delleteBudget,
            deleteExpense
         }}>
             {children}
         </BudgetContext.Provider>
     )
}