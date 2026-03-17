import "./Main.css";
import Display from "../Display/Display";
import Form from "../Form/Form";
import { useState } from "react";

export default function Main() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  interface Transaction {
    type?: string;
    amount: number;
  }

  function onSubmit(event: any): void {
    event.preventDefault();
    let data = new FormData(event.target);

    let newTransaction: Transaction = {
      type: String(data.get("type")) || "Other",
      amount: Number(data.get("amount")) || 0,
    };
    setTransactions([...transactions, newTransaction]);
    // reset form
    event.target.reset();
  }

  function totalAmount(): number {
    return transactions.reduce((total, tx) => total + tx.amount, 0);
  }

  return (
    <div className="main">
      <Form onSubmit={onSubmit} />
      <Display totalAmount={totalAmount()} transactions={transactions} />
    </div>
  );
}
