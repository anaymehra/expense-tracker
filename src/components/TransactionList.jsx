import React, {useContext} from "react";
import { GlobalContext } from "./context/GlobalState";
import { Transactions } from "./Transactions";

export const TransactionList = () => {
    // const context = useContext(GlobalContext); destructuring this : 
    const {transactions} = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item,i)=>{
          return <Transactions key={item.id} transaction = {item}/>
        })}
        
      </ul>
    </>
  );
};
