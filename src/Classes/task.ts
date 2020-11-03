import { TaskDTO } from "../DTO/TaskDTO";

class Task implements TaskDTO{
    timeStart : Date = new Date(); 
    timeEnd: Date = new Date(0);
    id : String = Math.random().toString(26).slice(2);
    isClosed : Boolean = false;

    constructor(
        public name : String,
    ){}

    close(): void {
        this.timeEnd = new Date();
        this.isClosed = true;
    }
}

export default Task;