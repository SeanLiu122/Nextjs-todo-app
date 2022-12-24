export const Form = (props) => {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input 
        type="text"
        name="text"
        id="new-todo-input"
        className="input input__lg"
        autoComplete="off"
        placeholder="Enter a TODO item"
        onChange={props.addTodo}
      />
      <button type="submit" className="btn__primary btn__lg" onClick={props.handleSubmit}>Add</button>
    </form>
  );
}