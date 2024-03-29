import { use, useState } from "react";
import { nanoid } from "nanoid";
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

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [todo, setTodo] = useState([{ id: "todo-0", name: "Eat", completed: true }]);
  const [filter, setFilter] = useState('All');

  const addTodo = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([
      {id: `todo-${nanoid()}`, name: userInput, completed: false},
      ...todo
    ]);
  }

  const deleteTask = (id) => {
    const updatedArr = todo.filter((todoObj) => id !== todoObj.id);
    setTodo(updatedArr);
  }

  const toggleTaskCompleted = (id) => {
    const updatedTodos = todo.map((todoObj) => {
      if(id === todoObj.id) {
        return {...todoObj, completed: !todoObj.completed}
      }
      return todoObj;
    });

    setTodo(updatedTodos);
  }

  const editTask = (id, newName) => {
    const editedTaskList = todo.map((todoObj) => {
      if(id === todoObj.id) {
        // todoObj.name = newName;
        return {...todoObj, name: newName};
      }
      return todoObj;
    });
    setTodo(editedTaskList);
  }

  const tasksNoun = todo.length !== 1 ? 'tasks' : 'task';
  const headingText = `${todo.length} ${tasksNoun} remaining`;

  const todoList = todo
    .filter(FILTER_MAP[filter])
    .map((todoObj) => {
      return <Todo 
        key={todoObj.id}
        name={todoObj.name}
        completed={todoObj.completed} 
        id={todoObj.id} 
        deleteTask={deleteTask}  
        editTask={editTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    });

  const filterList = FILTER_NAMES.map((name) => {
    return <FilterButton 
      key={name} 
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter}
    />
  });

  return (
    <div className="todoapp stack-large">
      <h1>Todo app</h1>
      <Form 
        addTodo={addTodo}
        handleSubmit={handleSubmit}
      />
      <div className="filters btn-group stack-exception">
       {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todoList}
      </ul>
    </div>
  )
}

