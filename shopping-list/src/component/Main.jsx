import shoppingList from "../data/data";
import List from "./List";
const Main = () => {
  return (
    <ul className="mainWrapper">
      {shoppingList.map((item) => (
        <List item={item} />
      ))}
    </ul>
  );
};
export default Main;
