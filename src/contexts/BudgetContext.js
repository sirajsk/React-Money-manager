import React, { useContext } from "react"
import {v4 as uuidv4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"
const BudgetContext=React.createContext()

 

export function useBudgets(){
     return  useContext(BudgetContext)
}

export const BudgetsProvider =({children}) =>{
    const [budgets,setBugets]=useLocalStorage("budget",[])
    const [expenses,setExpenses]=useLocalStorage("expenses",[])
    
   function getBudgetExpenses(budgetId){
       return expenses.filter(expense=>expense.budgetId===budgetId)

   }
  function  addExpense({Discription,amount,BudgetId}){
    setExpenses(prevExpenses =>{
       
        return [...prevExpenses,{id:uuidv4(),Discription,amount,BudgetId}]
    })
  }
  function addBudget({name,max}){
    setBugets(prevBudgets =>{
        if(prevBudgets.find(budget=> budget.name===name)){
            return prevBudgets
        }
        return [...prevBudgets,{id:uuidv4(),name,max}]
    })
  }
  function deleteBudget({id}){
    setBugets(prevBudgets=>{
        return prevBudgets.filter(budget =>budget.id !== id )
    })

  }
  function deleteExpense({id}){
    setExpenses(prevExpenses=>{
        return prevExpenses.filter(budget =>budget.id !== id )
    })
  }
    return (
         <BudgetContext.Provider value={{
             budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
         }}>
             {children}
         </BudgetContext.Provider>
     )
}