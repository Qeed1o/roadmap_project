import { TaskDTO } from "../DTO/TaskDTO";

interface TaskConfig {
    id?: string;
    isActive?: boolean;
    isClosed?: boolean;
    desc?: string;
    timeEnd?: Date | null;
    timeStart?: Date;
}

class Task implements TaskDTO{
    desc: string = "";
    timeStart : Date = new Date(); 
    timeEnd: Date | null = null;
    id : string = Math.random().toString(26).slice(2);
    isClosed : boolean = false;
    isActive : boolean = false;

    constructor( public name: string, task?: TaskConfig ){
        this.id = task?.id || Math.random().toString(26).slice(2);
        this.isActive = task?.isActive || false;
        this.isClosed = task?.isClosed || false;
        this.desc = task?.desc || '';
        this.timeEnd = task?.timeEnd || null,
        this.timeStart = task?.timeStart || new Date();
    }

    close(): void {
        this.timeEnd = new Date();
        this.isClosed = true;
    }

    toggleActive(): void {
        this.isActive = !this.isActive;
    }
}

export default Task;