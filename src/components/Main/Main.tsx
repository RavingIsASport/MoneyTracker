import "./Main.css";
import Display from "../Display/Display";
import Transaction from "../TransactionForm/Transaction";
import Deposit from "../DepositForm/Deposit";
import { useReducer } from "react";
import useDialog from "../../Hooks/useDialog";

// Defining interfaces for Transaction and Deposit to ensure type safety and clarity in the code
interface Transaction {
  type?: string;
  amount: number;
}

interface Deposit {
  type: "Deposit";
  amount: number;
}

let initialState: (Transaction | Deposit)[] = [];

// Reducer function to manage the state of transactions and deposits in a predictable way based on dispatched actions
function formReducer(state: (Transaction | Deposit)[], action: any) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload];
    case "ADD_DEPOSIT":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default function Main() {
  // Made a Transaction interface to define the shape of the transaction objects
  const [state, dispatch] = useReducer(formReducer, initialState);

  // useRef to reference the dialog element for opening and closing it
  const transactionRef = useDialog();
  const depositRef = useDialog();

  // onSubmit function to pass to form component to handle form submission and update transactions state
  function onSubmit(event: any, formType: "transaction" | "deposit"): void {
    event.preventDefault();

    if (formType === "transaction") {
      // Using FormData to easily extract form values and create a new transaction object
      let data = new FormData(event.target);

      // Using type assertion to ensure the values are of the correct type and providing default values if they are missing
      let newTransaction: Transaction = {
        type: String(data.get("type")) || "Other",
        amount: Number(data.get("amount")) || 0,
      };

      // Updating the transactions state by creating a new array with the existing transactions and the new transaction
      dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });

      // reset form and close dialog after submission
      event.target.reset();
      transactionRef.close();
    } else if (formType === "deposit") {
      let data = new FormData(event.target);

      let newDeposit: Deposit = {
        type: "Deposit",
        amount: Number(data.get("amount")) || 0,
      };

      dispatch({ type: "ADD_DEPOSIT", payload: newDeposit });

      event.target.reset();
      depositRef.close();
    }
  }

  // totalAmount function
  function totalAmount(): number {
    let totalDeposits = state.reduce(
      (total, item) => total + (item.type === "Deposit" ? item.amount : 0),
      0,
    );
    let totalTransactions = state.reduce(
      (total, item) => total + (item.type !== "Deposit" ? item.amount : 0),
      0,
    );
    return totalDeposits - totalTransactions;
  }

  return (
    <div className="main">
      <div className="dialogBtns">
        <button className="dialogOpen" onClick={transactionRef.open}>
          Add Transaction
        </button>
        <button className="dialogOpen" onClick={depositRef.open}>
          Deposit
        </button>
      </div>
      <Display totalAmount={totalAmount()} bothForms={state} />
      <dialog className="transactionForm" ref={transactionRef.dialogRef}>
        <Transaction onSubmit={onSubmit} closeDialog={transactionRef.close} />
      </dialog>
      <dialog className="depositForm" ref={depositRef.dialogRef}>
        <Deposit onSubmit={onSubmit} closeDialog={depositRef.close} />
      </dialog>
    </div>
  );
}
