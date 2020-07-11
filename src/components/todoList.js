import React, { useState } from "react";

import MyList from "./myList";

import Paper from "@material-ui/core/Paper";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const paperStyle = {
  paper: {
    width: "30vw",
    height: "fit-content",
    marginTop: "5%",
    marginLeft: "35%",
    backgroundColor: "e8eaf6",
  },
  title: {
    color: "#1976d2",
    textAlign: "center",
  },
  newTaskContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { title: "Apprendre React", done: false, highlighted: false },
  ]);
  const [newTask, setNewTask] = useState("");

  //Inverse le statut d'une tâche , la complète ou !complète
  const ChangeStatusOfTask = (indexOfTask) => {
    const newTasksList = [...tasks];
    newTasksList[indexOfTask].done = !newTasksList[indexOfTask].done;

    setTasks(newTasksList);
  };

  //Change la valeur du Hook de la nouvelle tâche en fonction de l'input
  const onChangeNewTask = (e) => {
    setNewTask(e.target.value);
  };

  //Fonction qui ajoute une tâche à notre liste et vide notre input
  const addTask = () => {
    const newTasksList = [...tasks];
    newTasksList.push({ title: newTask, done: false, highlighted: false });
    setTasks(newTasksList);
    setNewTask("");
  };

  const highlightMyTask = (indexOfTask) => {
    const newTasksList = [...tasks];
    newTasksList[indexOfTask].highlighted = !newTasksList[indexOfTask]
      .highlighted;

    setTasks(newTasksList);
  };
  return (
    <>
      <Paper elevation={3} style={paperStyle.paper}>
        <h2 style={paperStyle.title}> My React Todo List</h2>
        <Container style={paperStyle.newTaskContainer}>
          <TextField
            id="standard-basic"
            label="New task"
            value={newTask}
            onChange={(e) => onChangeNewTask(e)}
          />
          <IconButton color="primary" onClick={() => addTask()}>
            <AddCircleOutlineRoundedIcon fontSize="large" />
          </IconButton>
        </Container>
        <MyList
          TasksList={tasks}
          taskManager={ChangeStatusOfTask}
          highlightTask={highlightMyTask}
        />
      </Paper>
    </>
  );
};

export default TodoList;
