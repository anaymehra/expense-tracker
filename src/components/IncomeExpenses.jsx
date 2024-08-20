import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)

  // There is a better way to do this, hint: .filter() and .reduce()
  const income = transactions.map((item)=>{
    return item.amount > 0 ? item.amount : null 
  })
  const expenses = transactions.map((item)=>{
    return item.amount < 0 ? item.amount : null 
  })
  const incomeSum = income.reduce((accumulator,initialValue)=>(accumulator+=initialValue),0)
  const expensesSum = expenses.reduce((accumulator,initialValue)=>(accumulator+=initialValue),0)

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p  className="money plus">+${incomeSum}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p  className="money minus">-${Math.abs(expensesSum)}</p>
    </div>
  </div>
  )
}
