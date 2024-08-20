import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  // storing all the transactions in an array
  const amounts = transactions.map((item) => {
    return item.amount;
  });
  // eval of that array we use .reduce() function 
  const total = amounts.reduce(
    (accumulator, initialValue) => (accumulator += initialValue),
    0
  );
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
