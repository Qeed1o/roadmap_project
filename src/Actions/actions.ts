import {Request, Response} from 'express';

import TaskList from "../Classes/taskList";
import Task from "../Classes/task";
import { TaskDTO } from '../DTO/TaskDTO';

export default class Actions{
    public taskList: TaskList = new TaskList();

    public getAllTasks (res: Response) { res.json(this.taskList) };

    public createTask(req: Request, res: Response){
        if(!req.params.name){
            res.send('No name')
        }else{
            const task = new Task(req.params.name);
            this.taskList.push(task);
            res.json(task);
        }
    }

    public getTaskById(req: Request, res: Response){
        if(!req.params.id){
            res.send('Wrong Data');
        }else{
            const task : Task | undefined = this.taskList.getTaskById(req.params.id);
            task ? res.json(task) : res.send("404.");
        }
    }

    public closeTaskById(req: Request, res: Response){
        if(!req.params.id){
            res.send('Wrong Data');
        }else{
            const task : TaskDTO | undefined = this.taskList.getTaskById(req.params.id);
            if(task){
                task.close();
                res.json(task);
            }else{
                res.send('404.')
            } 
        }
    }

    public clearTasks(req: Request, res: Response){
        this.taskList.clear();
        this.taskList.isEmpty() ? res.send('200') : res.send('502')
    }
}