import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import TodoService from "../services/TodoService";


function TaskCheckbox({task}) {
    const [taskState, setTaskState] = useState(task);
    const navigate = useNavigate();


    const handleChange = async (e) => {
        console.log(e)
        setTaskState((previousState) => {
            console.log(previousState)
            return {
                ...previousState,
                completed: !e.target.checked
            }
        })
        // console.log(taskState)
        await TodoService.updateTask(taskState)
      };


      function updateTask (){
        navigate(`/update-task/${task.id}`);
      }

    return(
        <tr key={taskState.id}>
        <td> {taskState.task} </td>
        <td> {taskState.comment} </td>
        <td>
            <input type="checkbox" class="form-check-input" onChange={handleChange}/>
        </td>
        <td>
            <button className="btn btn-info" onClick={() => updateTask(task)}> Modificar </button>
            <button className='btn btn-danger' style={{marginLeft: "10px"}}> Excluir </button>
        </td>
      </tr>
    )
      

}

export default TaskCheckbox;