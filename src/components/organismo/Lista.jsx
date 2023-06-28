import TextStyle from '../atoms/Text/Text.Style'
import Tarefa from '../molecula/Tarefa/Tarefa'
import InputStyle from '../Input/Input.Style'
import ButtonStyle from '../atoms/Button/Button.Style'
import ModalGenerico from '../molecula/ModalGenerico/ModalGenerico'
import React, { useState, useEffect } from 'react';
import IconStyle from '../atoms/Icon/Icon.Style'
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import AdicionarTarefa from '../molecula/AdicionarTarefa/AdicionarTarefa'

export default function Lista() {

  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState(null);



  const handleClose = () => {

    setShow(false)
    setSelectedTaskId('')
  }

  const handleShow = (taskId) => {
    setShow(true)
    setSelectedTaskId(taskId);

  }


  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  }

  const handleTaskUpdateChange = (event) => {
    setTaskUpdate(event.target.value);
  };


  function adicionarTarefa() {
    if (taskInput.trim() !== '') {
      const novaTarefa = {
        id: Date.now(),
        nome: taskInput.trim(),
        completed: false
      }
      setTasks([...tasks, novaTarefa]);
      setTaskInput('');

      const tarefasArmazenadas = JSON.parse(localStorage.getItem('tasks')) || [];
      const tarefasAtualizadas = [...tarefasArmazenadas, novaTarefa];
      localStorage.setItem('tasks', JSON.stringify(tarefasAtualizadas));

    }
  }

  function deletarTarefa(taskId) {

    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));


  }

  function atualizarTarefa() {
    const updatedTasks = tasks.map((task) => {
      if (task.id === selectedTaskId) {

        return { ...task, nome: taskUpdate }
      }
      return task;
    });
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    handleClose()

  }

  function riscarTarefa(taskId) {

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        if (task.completed === true) {
          return { ...task, completed: false }
        }
        else
          return { ...task, completed: true }
      }
      return task;
    });
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

  }

  useEffect(() => {
    const tarefasArmazenadas = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(tarefasArmazenadas);
  }, []);


  return (
    <>
      <div className="text-center">
        <TextStyle mode="titulo"> Planner</TextStyle>
      </div>

      <TextStyle mode="subtitulo"> Tarefas</TextStyle>
      <ListGroup className="w-25" variant="flush">

        {tasks.map((task, index) => (

          <ListGroup.Item>
            <Tarefa
              iconCheck={
                task.completed ? (
                  <IconStyle variant="link" mode="riscado" onClick={() => riscarTarefa(task.id)}>
                    <i className="bi bi-check-square-fill"></i>
                  </IconStyle>
                ) : (
                  <IconStyle variant="link" mode="do" onClick={() => riscarTarefa(task.id)}>
                    <i className="bi bi-square"></i>
                  </IconStyle>
                )
              }
              text={task.completed ? (
                <TextStyle variant="link" mode="riscado">
                  {task.nome}
                </TextStyle>
              ) : (
                <TextStyle variant="link" mode="do">
                  {task.nome}
                </TextStyle>
              )}
              iconAtualizar={<i class="bi bi-pencil-square" onClick={() => handleShow(task.id)}></i>}
              iconDeletar={<i class="bi bi-trash3" onClick={() => deletarTarefa(task.id)}></i>}
            />

            <ModalGenerico
              show={show}
              onHide={handleClose}
              title="Editar Tarefa"
              content={
                <div className="d-flex justify-content-around">
                  <Form.Control
                    type="text"
                    className="text-center form-control-sm"
                    placeholder="Atualizar tarefa"
                    onChange={handleTaskUpdateChange}
                  />
                </div>
              }
              onClose={handleClose}
              onSave={() => atualizarTarefa(task.id)}
            />

          </ListGroup.Item>
        ))}

      </ListGroup>

      <div className='d-flex'>

        <AdicionarTarefa
          inputProps={{
            placeholder: "Adicione sua tarefa",
            value: taskInput,
            onChange: handleTaskInputChange,
          }}

          btnProps={{

            onClick: adicionarTarefa,
          }}
        > +</AdicionarTarefa>
      </div>
    </>
  )
}
