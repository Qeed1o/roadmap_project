import { TaskDTO } from "../DTO/TaskDTO";

class Task implements TaskDTO{
    timeStart : Date = new Date(); 
    timeEnd: Date | null = null;
    id : String = Math.random().toString(26).slice(2);
    isClosed : Boolean = false;
    isActive : Boolean = false;

    constructor(
        public name : String,
        public description: String = ""
    ){}

    close(): void {
        this.timeEnd = new Date();
        this.isClosed = true;
    }

    toggleActive(): void {
        this.isActive = !this.isActive;
    }
}

export default Task;