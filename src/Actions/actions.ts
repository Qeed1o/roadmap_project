import TaskList from "../Classes/taskList";
import Task from "../Classes/task";

class Actions{
    private taskList : TaskList = new TaskList();

    getTaskList() : TaskList { return this.taskList;};

    newTask(name: String) : Task{
        const task = new Task(name);
        this.taskList.push(task);
        return task;
    }

    getTask(id: string) : String | Task {
        const task : Task[] = this.taskList.getTaskById(id);
        return task ? task[0] : "404.";
    }

    closeTask(id: string) : Object | String {
        const task : Task[] = this.taskList.getTaskById(id);
        if(task){
            task[0].setTimeEnd(new Date());
            return ({
                id: task[0].getId(),
                name: task[0].getName(),
                closed: task[0].isClosed(),
            })
         }else{
            return('404.')
         } 
    }
}

export default Actions;