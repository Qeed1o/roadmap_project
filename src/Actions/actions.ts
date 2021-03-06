import {Request, Response} from 'express';

import TaskList from "../Classes/taskList";
import Task from "../Classes/task";
import { TaskDTO } from '../DTO/TaskDTO';

export default class Actions{
    public taskList: TaskList = new TaskList();

    public getAllTasks (res: Response) { res.json(this.taskList) };

    public createTask(req: Request, res: Response){
        console.log(req.body)
        if(!req.body.name){
            res.send('No name')
        }else{
            const task = new Task(req.body.name, {desc: req.body.desc});
            this.taskList.push(task);
            res.json(this.taskList);
        }
    }

    public updateTask(req: Request, res: Response) {
        if (!req.body.id){
            res.json('No id provided');
        } else {
            const task: Task | undefined = this.taskList.getTaskById(req.body.id);
            if (!task){ res.send('No task found'); return }
            const newTask = new Task(task.name, {
                desc: req.body.desc !== undefined ? req.body.desc : task.desc,
                isClosed: req.body.isClosed !== undefined && !task.isClosed ? req.body.isClosed : task.isClosed,
                isActive: req.body.isActive !== undefined ? req.body.isActive : task.isActive,
                timeEnd: task.timeEnd,
                id: req.body.id,
                timeStart: task.timeStart
            });
            this.taskList.setTaskById(newTask);
            res.json(this.taskList)
        }
    }

    public makeTaskActiveById(req: Request, res: Response){
        if(!req.params.id){
            res.send('Wrong Data');
        } else {
            const task : Task | undefined = this.taskList.getTaskById(req.params.id);
            if(task){
                task.toggleActive();
                res.json(this.taskList);
            }else{
                res.send('404.')
            }
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
            if(task && !task.isClosed){
                task.close();
                res.json(this.taskList);
            }else{
                res.send('404.')
            } 
        }
    }

    public clearTasks(req: Request, res: Response){
        this.taskList.clear();
        this.taskList.isEmpty() ? res.send('200') : res.send('502')
    }

    public deleteTaskById(req: Request, res: Response){
        if(!req.params.id){
            res.send('Wrong Data');
        }else{
            this.taskList.deleteById(req.params.id)
            res.json(this.taskList)
        }
    }
}