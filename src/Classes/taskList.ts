import { TaskListDTO } from "../DTO/TaskListDTO";
import Task from "./task";
import { TaskDTO } from "../DTO/TaskDTO";

class TaskList implements TaskListDTO{
    list: Task[];

    constructor(){
        this.list = [];
    }

    push(task : Task) : void{
        this.list.push(task);
    }

    getTaskById(id: string) : Task | undefined{
        const task: Task | undefined = this.list.find( (task: Task) => task.id === id );
        return task;
    }

    getTaskIndexById(id: string) : number {
        const index: number = this.list.findIndex( (task: Task) => task.id === id );
        return index;
    }

    setTaskById(task: Task): void {
        const index = this.getTaskIndexById(task.id);
        this.list[index] = task;
    }

    clear(){
        this.list = [];
    }

    isEmpty(){
        return this.list.length === 0;
    }

    deleteById(id: string) : void {
        const index: number = this.list.findIndex( (task: Task) => task.id === id);
        if (index === -1) return;
        this.list.splice(index, 1);
    }
}

export default TaskList;