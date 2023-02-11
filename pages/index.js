import { useState } from "react";
import { Todo } from "../screens/Todo";
import { FilterButton } from "../screens/FilterButton";
import { Form } from "../screens/Form";

// import { Form, Form2 } from "../screens/Form";

// localStorage to store data
// typescript
// eslint with prettier plugin

// Nextjs routing + API routes

// prisma with mongodb

// Clean Code by Uncle bob 
// unit test
export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [todo, setTodo] = useState([{ id: "todo-0", name: "Eat", completed: true }]);
  const [isEditing, setEditing] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([
      {id: `1${userInput}`, name: userInput, completed: false},
      ...todo
    ]);
  }

  const handleDelete = (task, index) => {
    const updatedArr = todo.filter((todoObj, todoItemIndex) => index !== todoItemIndex);
    setTodo(updatedArr);
  }

  const handleEdit = (id, newName) => {
    const editedTaskList = todo.map((todoObj) => {
      if(id === todoObj.id) {
        // todoObj.name = newName;
        return {...todoObj, name: newName};
      }
      return todoObj;
    });
    setTodo(editedTaskList);
  }

  const editingTemplate = (
    <form className="stack-small">
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel">
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn_primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input 
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button 
          type="button" 
          className="btn btn__danger"
          onChange={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

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
          todo.length >= 1 ? todo.map((todoObj, index) => {
            return <Todo 
              key={`${todoObj.name}-${index}`}
              value={todoObj.name}
              completed={todoObj.completed} 
              id={todoObj.id} 
              index={index}
              handleDelete={handleDelete}  
              handleEdit={handleEdit}
            />
          })
          : ''
        }
      </ul>
    </div>
  )
}

