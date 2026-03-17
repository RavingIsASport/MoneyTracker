import "./Form.css";
import { FaDollarSign } from "react-icons/fa6";

interface FormProps {
  onSubmit: (event: any) => void;
}

export default function Form({ onSubmit }: FormProps) {
  return (
    <>
      <form onSubmit={onSubmit} className="form-container">
        <h2>Add Transaction</h2>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select id="type" name="type" defaultValue="Other">
            <option value="Credit Card">Credit Card</option>
            <option value="Dinning Out">Dinning Out</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Gas">Gas</option>
            <option value="Groceries">Groceries</option>
            <option value="Insurance">Insurance</option>
            <option value="Loan Payments">Loan Payments</option>
            <option value="Rent/Mortgage">Rent/Mortgage</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="textInput">
          <label htmlFor="amount">Amount</label>
          <div className="inputWrapper">
            <FaDollarSign className="dollarIcon" />
            <input type="number" id="amount" name="amount" />
          </div>
        </div>

        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
}
