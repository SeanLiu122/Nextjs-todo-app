import React, { useState } from 'react';

import { Button, Stack, Paper, Grid, Item, Box, ListItem, List, ListItemAvatar, Avatar, ListItemText, IconButton, Checkbox } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { styled } from '@mui/material/styles';

export const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleChange = (e) => {
    setNewName(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input 
          id={props.id} 
          className="todo-text"
          type="text" 
          name={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button 
          type="button" 
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
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
    <ListItem>
        <Checkbox 
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
      <ListItemText
        primary={props.name}
      />
      <IconButton>
        <EditIcon 
          onClick={() => setEditing(true)}
        />
      </IconButton>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon 
          onClick={(e) => {
            e.preventDefault();
            props.deleteTask(props.id)
          }}
        />
      </IconButton>
    </ListItem>
  );

  return (
    <Grid item>
      <List>
        {isEditing ? editingTemplate : viewTemplate}
      </List>
    </Grid>
  );
}