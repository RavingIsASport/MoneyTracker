import "./Display.css";

interface DisplayProps {
  totalAmount: number;
  bothForms: any[];
}

export default function Display({ totalAmount, bothForms }: DisplayProps) {
  return (
    <>
      <div className="transactions-list">
        <div className={totalAmount >= 0 ? "positiveTotal" : "negativeTotal"}>
          <strong>Total: ${totalAmount.toFixed(2)}</strong>
        </div>
        <table className="transactionTable">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bothForms.map(({ type, amount }, index) => (
              <tr
                key={index}
                className={type === "Deposit" ? "depositRow" : "transactionRow"}
              >
                <td>{type}</td>
                <td>
                  {type === "Deposit" ? "+ " : "- "}${amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
