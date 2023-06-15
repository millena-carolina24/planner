import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';


export function Inicio() {

    const [taskInput, setTaskInput] = useState('');
    const [taskUpdate, setTaskUpdate] = useState('');

    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleTaskInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleTaskUpdateChange = (event) => {
        setTaskUpdate(event.target.value);
    };

    // Pega o que está no input e coloca em uma variável

    useEffect(() => {
        const tarefasArmazenadas = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(tarefasArmazenadas);
    }, []);

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

        //   taskInput.trim() é usado para garantir que a adição da tarefa só aconteça se o valor do input não for vazio, mesmo que contenha espaços em branco.

    }

    function deletarTarefa(taskId) {

        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));


    }

    function atualizarTarefa(taskId) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {

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

    return (
        <Container>
            <div>
                <h1 className='text-center'>Planner Diário</h1>
            </div>

            <style>
                {`
          .completed-task {
            text-decoration: line-through;
          }
        `}
            </style>

            <div className='row'>
                <div className='col-md-6 text-center mt-4'>
                    <h4>Tarefas</h4>
                    <ListGroup variant="flush">
                        {tasks.map((task, index) => (
                            <ListGroup.Item key={task.id} className={task.completed ? 'completed-task' : ''}
                            >

                                {task.completed ? (
                                    <Button variant="link" onClick={() => riscarTarefa(task.id)}><i class="bi bi-check-square-fill"></i></Button>
                                ) : (
                                    <Button variant="link" onClick={() => riscarTarefa(task.id)}><i class="bi bi-square"></i></Button>
                                )}
                                {task.nome}

                                <Button variant="link" onClick={handleShow}>  <i class="bi bi-pencil-square"></i> </Button> <Button variant="link" onClick={() => deletarTarefa(task.id)}><i class="bi bi-trash3"></i>  </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Editar</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <div className='d-flex justify-content-around'> <Form.Control type="text" className=" text-center form-control-sm" placeholder="Atualizar tarefa"
                                            onChange={handleTaskUpdateChange} />
                                        </div>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={() => atualizarTarefa(task.id)}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                            </ListGroup.Item>

                        ))}

                    </ListGroup>
                    <div className='d-flex justify-content-around'> <Form.Control type="text" className=" text-center form-control-sm" placeholder="Adicione sua tarefa" value={taskInput}
                        onChange={handleTaskInputChange} />
                        <Button onClick={adicionarTarefa} variant="light"> + </Button> </div>
                </div>

                <div className='col-md-6 text-center mt-4'>
                    <h4>Compromissos</h4>

                    <ListGroup variant="flush">
                        <ListGroup.Item>Ir no mercado <Button variant="light"> <i class="bi bi-check-circle"></i> </Button></ListGroup.Item>
                        <ListGroup.Item>Fazer compras de roupa</ListGroup.Item>
                        <ListGroup.Item>Ler</ListGroup.Item>
                        <ListGroup.Item>Escrever</ListGroup.Item>
                        <div className='d-flex justify-content-around'> <Form.Control type="text" className=" text-center form-control-sm" placeholder="Adicione seu compromisso" />
                            <Button variant="light" > + </Button> </div>
                    </ListGroup>
                </div>
            </div>


        </Container>
    );
}
