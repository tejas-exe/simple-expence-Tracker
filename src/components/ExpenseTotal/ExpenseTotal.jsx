import s from "./style.module.css";
import { useSelector } from "react-redux";
export function ExpenseTotal(props) {
  const totalItem = useSelector((item) => item.Expence.expenceList);
  const totalExpence = totalItem.reduce(
    (acc, item) => acc * 1 + item.price * 1,
    0
  );
  console.log("===>Reduce", totalExpence);
  const availableIncome = useSelector((item) => item.Expence.income);
  const remaning = availableIncome * 1 - totalExpence * 1;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{`${totalExpence} $`}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{`${remaning} $`}</div>
      </div>
    </div>
  );
}
