import Task from "../Classes/task";

export interface TaskDTO{
    timeStart?: Date,
    timeEnd?: Date | null,
    id: string,
    isClosed?: boolean,
    isActive?: boolean,
    name: string,
    desc?: string,

    close(): void,
    toggleActive(): void,    
}