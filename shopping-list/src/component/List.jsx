// using destructuring
const List = ({ item }) => {
  // using destructuring
  const { product, quantity, packed } = item;
  return (
    <li className="listWrapper">
      {/* {item.product} */}
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>

      <div>
        <button className="doneBtn">Done</button>
        <button className="deleteBtn">Delete</button>
      </div>
    </li>
  );
};
export default List;
