import { FaDollarSign, FaX } from "react-icons/fa6";
import "./Deposit.css";

interface DepositProps {
  onSubmit: (event: any, formType: "deposit") => void;
  closeDialog: () => void;
}

export default function Deposit({ onSubmit, closeDialog }: DepositProps) {
  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e, "deposit")}
        className="deposit-container"
      >
        <h2>Deposit</h2>
        <button className="close" type="button" onClick={closeDialog}>
          <FaX />
        </button>
        <div className="textInput">
          <label htmlFor="amount">Amount</label>
          <div className="inputWrapper">
            <FaDollarSign className="dollarIcon" />
            <input type="number" id="amount" name="amount" />
          </div>
        </div>

        <button type="submit">Add Money</button>
      </form>
    </>
  );
}
