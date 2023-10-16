import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const totalAmount = transactions
      .map((transaction) => transaction.amount)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);

    setBalance(totalAmount);
  }, [transactions]);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
