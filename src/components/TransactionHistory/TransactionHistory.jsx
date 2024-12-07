import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
<table className={css.table}>
  <thead>
    <tr>
      <th className={css.columns}>Type</th>
      <th className={css.columns}>Amount</th>
      <th className={css.columns}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => {
        return (
            <tr className={css.rows} key={id}>
                <td className={clsx(css.columns, css.type)}>{type}</td>
                <td className={css.columns}>{amount}</td>
                <td className={css.columns}>{currency}</td>
            </tr>
        );
    })}
  </tbody>
</table>
);
};

export default TransactionHistory;