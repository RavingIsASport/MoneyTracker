import "./Display.css";

interface DisplayProps {
  totalAmount: number;
  transactions: { type?: string; amount: number }[];
}

export default function Display({ totalAmount, transactions }: DisplayProps) {
  return (
    <>
      <div className="transactions-list">
        <table className="transactionTable">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          {transactions.map(({ type, amount }, index) => (
            <tr key={index}>
              <td>{type}</td>
              <td>${amount.toFixed(2)}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="display">
        <strong>Total: ${totalAmount.toFixed(2)}</strong>
      </div>
    </>
  );
}
