import { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "../screens/Todo";
import { FilterButton } from "../screens/FilterButton";
import { Form } from "../screens/Form";
import { NavBar } from '../components/NavBar';

import { Box, Paper, Grid, Item, List, ListItem, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// import { Form, Form2 } from "../screens/Form";

// localStorage to store data
// typescript
// eslint with prettier plugin

// Nextjs routing + API routes

// prisma with mongodb

// Clean Code by Uncle bob 
// unit test


// 3/18/23
// Container -> has a max width = 1000px; children 100% width
// use Stack
// sx={{}}


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
    <Container maxWidth='md'>
      <Box sx={{
        background: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1)',
      }}>
        <NavBar />
        <Stack>
          <Item>
            <Grid className="todoapp-top">
              <div>
                <Form 
                  addTodo={addTodo}
                  handleSubmit={handleSubmit}
                />          
              </div>
            </Grid>
          </Item>
          <Item>
            {filterList}
            <h2 id="list-heading">{headingText}</h2>
          </Item>
          <Item>
            <Grid
              container
              spacing={2}
              direction="column"
              justifyContent="start"
              alignItems="stretch"
            > 
              {todoList}
            </Grid>
          </Item>
        </Stack>
      </Box>
    </Container>
  )
}

