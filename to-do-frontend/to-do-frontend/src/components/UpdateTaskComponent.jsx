import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TodoService from '../services/TodoService';

const UpdateTodoComponent = () => {
    const navigate = useNavigate();

    
    const [state, setState] = useState({
        task: '',
        comment: '',
        completed: false,
    });


    const populateTaskFields = async() => {
        const url = window.location.href;
        const taskId = url.split("http://localhost:5173/update-task/").pop();
      console.log(taskId)

        const taskData = await TodoService.findTask(taskId).then(r => r.data);
        console.log(taskData);
        setState({
            ...taskData
        })
    }

     useEffect(() => {
        populateTaskFields();
    },[]);


    const updateTask = async (event) => {
        const url = window.location.href;
        const taskId = url.split("http://localhost:5173/update-task/").pop();
  
        event.preventDefault();
        const task = {
            task: state.task,
            comment: state.comment,
        };

        
        console.log(taskId);
        console.log('task =>' + JSON.stringify(task));

        await TodoService.updateTask(state)
        navigate(`/`); 
            
                
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const cancel = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div id='customtable' className='card col-md-6 offset-md-3 offset-md-3'>
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
          
                            <button id='btnupdate' className='btn btn-success' onClick={updateTask}>
                                Salvar
                            </button>
                            <button
                                id='btndelete'
                                className='btn btn-danger'
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

export default UpdateTodoComponent;