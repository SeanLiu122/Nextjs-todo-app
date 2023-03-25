import React, { useState } from 'react';

import { Button, Stack, Typography, Paper, Grid, Item, Box, ListItem, List, ListItemAvatar, Avatar, ListItemText, IconButton, Checkbox, TextField, Modal } from "@mui/material";
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
  },
  modal: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
};

export const Todo = (props) => {
  const [newName, setNewName] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <IconButton 
        edge="end" 
        // color="primary" 
        aria-label="edit"
        onClick={handleOpen}
      > 
        <EditIcon />
      </IconButton>
      <IconButton 
        edge="end" 
        aria-label="delete" 
        onClick={(e) => {
        e.preventDefault();
        props.deleteTask(props.id)
      }}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Grid item>
        <List>
          {viewTemplate}
        </List>
      </Grid>
    </div>
  );
}