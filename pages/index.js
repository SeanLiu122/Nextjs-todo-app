import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList([
      userInput,
      ...todoList
    ]);
  }

  const handleDelete = (todo, index) => {
    const updatedArr = todoList.filter((todoItem, todoItemIndex) => index != todoItemIndex);
    setTodoList(updatedArr);
  }

  const handleEdit = () => {
    console.log('editing');
  }

  return (
    <div className="todoapp stack-large">
      <h1>Todo app</h1>
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
          onChange={addTodo}
        />
        <button type="submit" className="btn__primary btn__lg" onClick={handleSubmit}>Add</button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button">Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
      <h2 id="list-heading">Tasks Remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          todoList.length >= 1 ? todoList.map((todo, index) => {
            return <li className="todo stack-small" key={index}>{todo}
            <div className="btn-group"><button type="button" className="btn btn__danger" onClick={(e) => {
              e.preventDefault();
              handleDelete(todo, index);
            }}>Delete</button>
            <button type="button" className="btn" onClick={(e) => {
              e.preventDefault();
              handleEdit();
            }}>Edit</button></div>
            </li>
          })
          : ''
        }
      </ul>
    </div>
  )
}
