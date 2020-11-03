import { TaskListDTO } from "../DTO/TaskListDTO";
import Task from "./task";
import { TaskDTO } from "../DTO/TaskDTO";

class TaskList implements TaskListDTO{
    list: Task[];

    constructor(){
        this.list = [];
    }

    push(task : TaskDTO) : void{
        this.list.push(task);
    }

    getTaskById(id: String) : Task | undefined{
        const task: Task | undefined = this.list.find( (task: Task) => task.id === id );
        return task;
    }
}

export default TaskList;