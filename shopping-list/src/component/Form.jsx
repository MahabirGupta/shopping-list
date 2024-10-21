const Form = () => {
  const handleSubmit = (e) => {
    // to prevent the entire page from reloading when a change is made
    e.preventDefault();
    console.log(e);
  };
  return (
    // not sending any data so don't have to use arrow function for handleSubmit
    <form className="form" onSubmit={handleSubmit}>
      <select className="select">
        {/* dynamically provide the value so use curly braces{} */}
        {/* <option value={1}>1</option>
        <option value={2}>2</option> */}
        {/* create a 20 element array */}
        {/* using spread operator to create a 20 element Array */}
        {/* This will create a drop-down list with 20 numbers */}
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input className="input" type="text" placeholder="Enter a name" />
      <button className="addBtn">Add</button>
      {/* if there is more than 1 button then the button type must be specified */}
      {/* <button type="submit">Add</button> */}
    </form>
  );
};
export default Form;
