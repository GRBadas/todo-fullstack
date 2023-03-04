import axios from "axios";

const TODO_API_BASE_URL = "http://localhost:8080/api/v1/todo";

class TodoService {

    getTasks(){
        return axios.get(TODO_API_BASE_URL);
    }

    findTask(id){
        return axios.get(TODO_API_BASE_URL + "/" + id)
    }

    updateTask(task){
        return axios.put(TODO_API_BASE_URL + "/" + task.id, task)
    }

    createTask(task) {
        return axios.post(TODO_API_BASE_URL, task);
    }

}

export default new TodoService;