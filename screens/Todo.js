import React, { useState } from 'react';

import { Button, Stack, Paper, Grid, Item, Box, ListItem, List, ListItemAvatar, Avatar, ListItemText, IconButton, Checkbox, TextField } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';

//create our style
const styles = {
  root: {
    flexGrow: 1,
    width: "100%"
  },
  paper: {
    padding: 20,
    marginBottom: 10,
    // height: 50,
    // width: 550,
    width: "100%",
    backgroundColor: "#CDCDCD"
  }
};

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
        {viewTemplate}
      </List>
    </Grid>
  );
}