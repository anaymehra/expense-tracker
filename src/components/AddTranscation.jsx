import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalState";

export const AddTranscation = () => {
  const {addTransaction} = useContext(GlobalContext)
  
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  //can also use react-hook-form
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }
  
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={() => {}}>
          Add transaction
        </button>
      </form>
    </div>
  );
};
