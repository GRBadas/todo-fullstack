import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import TodoService from "../services/TodoService";


function TaskCheckbox({task, fetchTask}) {
    const [taskState, setTaskState] = useState(task);
    const navigate = useNavigate();
    useEffect(() => {
        handleChange()
    },[])

    const handleChange = async (e) => {
        console.log(e)
        try {
            await TodoService.updateTask({...task, completed: e.target.checked})
            await fetchTask()
        } catch (error) {
            console.log(error)
        }
    };

      function updateTask (){
        navigate(`/update-task/${task.id}`);
      }

      async function deleteTask(taskId) {
        await TodoService.deleteTask(taskId)
        .then(response => {
            console.log(`Tarefa com o ID ${taskId} deletada com sucesso.`);
            setTaskState(task.filter(task => task.id !== taskId));
        })
        .catch(error => {
            console.log(`Erro ao deletar a tarefa com o id ${taskId}: ${error.message}`)
        })
        window.location.reload()
      }


    return(
        <tr key={taskState.id}>
        <td> {taskState.task} </td>
        <td> {taskState.comment} </td>
        <td>
            <input type="checkbox" class="form-check-input" id="checkstyle" defaultChecked={taskState.completed} onChange={handleChange}/>
        </td>
        <td>
            <button className="btn btn-info" id="btnupdate" onClick={() => updateTask(task)}> Modificar </button>
            <button className='btn btn-danger' id="btndelete" onClick={() => deleteTask(task)} style={{marginLeft: "10px"}}> Excluir </button>
        </td>
      </tr>
    )
      

}

export default TaskCheckbox;