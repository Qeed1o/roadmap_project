import Task from "./task";

class TaskList{
    private list: Task[];

    constructor(){
        this.list = [];
    }

    push(task : Task) : void{
        this.list.push(task);
    }

    getTaskById(id: string) : Task[]{
        return this.list.filter( (task: Task) => task.getId() === id );
    }
}

export default TaskList;