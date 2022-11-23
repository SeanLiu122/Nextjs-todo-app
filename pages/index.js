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

  return (
    <div>
      <h1>Todo app</h1>
      <form>
        <input 
          type="text"
          placeholder="Enter a TODO item"
          onChange={addTodo}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {
          todoList.length >= 1 ? todoList.map((todo, index) => {
            return <li key={index}>{todo}<button onClick={(e) => {
              e.preventDefault();
              handleDelete(todo, index);
            }}>Delete</button></li>
          })
          : 'Enter a todo item'
        }
      </ul>
    </div>
  )
}
