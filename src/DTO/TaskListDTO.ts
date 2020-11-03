import { TaskDTO } from "./TaskDTO";
import Task from "../Classes/task";

export interface TaskListDTO {
    list: Array<TaskDTO>,

    push(task: TaskDTO) : void,
    getTaskById(id: String) : Task | undefined,
}