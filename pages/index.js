import { useState } from "react";
import { Todo } from "../screens/Todo";
import { FilterButton } from "../screens/FilterButton";
import { Form } from "../screens/Form";

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
      <Form 
        addTodo={addTodo}
        handleSubmit={handleSubmit}
      />
      <div className="filters btn-group stack-exception">
       <FilterButton />
      </div>
      <h2 id="list-heading">Tasks Remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          todoList.length >= 1 ? todoList.map((todo, index) => {
            return <Todo 
              key={`${todo}-${index}`}
              value={todo}
              completed={false} 
              id={index} 
              index={index}
              handleDelete={handleDelete}  
            />
          })
          : ''
        }
      </ul>
    </div>
  )
}

