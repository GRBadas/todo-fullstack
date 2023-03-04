import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoService from '../services/TodoService';

const CreateTodoComponent = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        task: '',
        comment: '',
        completed: false,
    });

    const saveTask = (e) => {
        e.preventDefault();
        console.log('task =>' + JSON.stringify(state));

        TodoService.createTask(state).then(res =>{
            navigate('/');
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
        // setTaskState((previousState) => {
        //     return {
        //         ...previousState,
        //         [name]: value
        //     }
        // })
    };

    const cancel = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3' id='customtable'>
                    <h3 className='text-center'> Adicionar Tarefa </h3>
                    <div className='card-body'>
                        <form action=''>
                            <div className='form-group'>
                                <label> Tarefa </label>
                                <input
                                    placeholder='Tarefa'
                                    name='task'
                                    className='form-control'
                                    value={state.task}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label> Comentário </label>
                                <input
                                    placeholder='Comment'
                                    name='comment'
                                    className='form-control'
                                    value={state.comment}
                                    onChange={handleInputChange}
                                />
                            </div>
          
                            <button
                             className='btn btn-success'
                              id='btnupdate'
                               onClick={saveTask}>
                                Salvar
                            </button>
                            <button
                                className='btn btn-danger'
                                id='btndelete'
                                onClick={cancel}
                                style={{ marginLeft: '10px' }}
                            >
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTodoComponent;