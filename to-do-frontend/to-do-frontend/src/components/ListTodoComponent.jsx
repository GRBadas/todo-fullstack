import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoService from '../services/TodoService';
import axios from 'axios'
import TaskCheckbox from './TaskCheckbox';

function ListTodoComponent() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

const fetchTask = async() => {
    try { const {data}=await TodoService.getTasks()
    setTasks(data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchTask()
  }, []);

  function addTask (){
    navigate('/add-task');
  }

  const lastTask = () => {
    return tasks.filter((task) => task.completed === false)
  } 

  const completedTask = () => {
    return tasks.filter((task) => task.completed === true)
  }

  return (
    <div>
      <h2 className='text-center'>Tasks List</h2>
      <div className='row'>
      <button className='btn btn-primary' onClick={addTask}>
          Nova Tarefa
        </button>
      </div>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th> Tarefa </th>
              <th> Comentário </th>
              <th> Status </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskCheckbox task={task} fetchTask={fetchTask}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTodoComponent;