import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const Transactions = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? "-" : "+";
  const color = transaction.amount < 0 ? "minus" : "plus";
  return (
    <div>
      <li className={color}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={()=>{deleteTransaction(transaction.id)}}>x</button>
      </li>
    </div>
  );
};
