import { ListItem } from "../ListItem/ListItem";
import { useSelector } from "react-redux";

export function List({ items }) {
  const expence = useSelector((store) => store.Expence);
  console.log("====>Selector", expence);
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {expence.expenceList.map((item) => (
            <ListItem item={item} key={Math.random()} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
