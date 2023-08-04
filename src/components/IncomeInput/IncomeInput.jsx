import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { ExpenceTrackerActions } from "Store/expenceSlice";

export function IncomeInput(props) {
  const dispach = useDispatch();

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          onChange={(e) => {
            dispach(
              ExpenceTrackerActions.updateIncome({
                income: Number(e.target.value),
              })
            );
          }}
        />
      </div>
    </div>
  );
}
