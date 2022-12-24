export const Todo = (props) => {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="props.id" type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label" htmlFor="props.id">
          {props.value}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn__danger" onClick={(e) => {
          e.preventDefault();
          props.handleDelete(props.value, props.index);
        }}>Delete</button>
        <button type="button" className="btn" onClick={(e) => {
          e.preventDefault();
          props.handleEdit();
        }}>Edit</button>
      </div>
    </li>
  );
}