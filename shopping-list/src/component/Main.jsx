import shoppingList from "../data/data";
import List from "./List";
import Form from "./Form";
const Main = () => {
  return (
    <div>
      {/* import the Form.jsx component */}
      <Form />
      <ul className="mainWrapper">
        {shoppingList.map((item) => (
          // create unique keys using item.id
          <List item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
export default Main;
