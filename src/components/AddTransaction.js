import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [inputAmount, setInputAmount] = useState(0);
  // fake data, assume id is count from 5
  const [transactionId, setTransactionId] = useState(5);
  const [inputText, setInputText] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: transactionId,
      text: inputText,
      amount: Number(inputAmount),
    };
    setTransactionId((prevState) => prevState + 1);

    addTransaction(newTransaction);

    setInputAmount(0);
    setInputText("");
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Enter text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        />
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
