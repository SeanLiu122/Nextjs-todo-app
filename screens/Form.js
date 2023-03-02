import { Button, Input, Stack } from "@mui/material";

export const Form = (props) => {
  return (
    <Stack 
      direction="row"
      spacing={8}
      justifyContent="center"
      sx={{ marginBottom: '10%' }}
    >
      <Input 
        type="text"
        id="new-todo-input"
        className="input input__lg"
        size="md"
        autoComplete="off"
        placeholder="Type in here…"
        variant="solid" 
        color="primary"
        fullWidth
        onChange={props.addTodo}
      />
      <Button 
        type="submit" 
        color="primary"
        size="small"
        variant="contained"
        className="btn__primary btn__lg" 
        onClick={props.handleSubmit}
      >Add</Button>
    </Stack>
  );
}
export const Form2 = () => {
  
}