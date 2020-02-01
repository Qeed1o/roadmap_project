import express, { response } from 'express';
import Task from '../Classes/task';
import TaskList from '../Classes/taskList';
import Actions from '../Actions/actions';

class Router{
    private app : express.Application;
    private actions: Actions = new Actions();
    constructor(app : express.Application){
        this.app = app;
    }

    route(){
        this.app.get('/', (req : express.Request, res : express.Response) : void => {
            res.json(this.actions.getTaskList());
        });

        this.app.post('/task/create/:name', (req : express.Request, res : express.Response) : void => {
            const task = this.actions.newTask(req.params.name);
            const response = {
                id: task.getId(),
                name : task.getName(),
                closed: task.isClosed(),
            }
            res.json(response);
        })

        this.app.get('/task/:id', (req : express.Request, res : express.Response) : void => {
            res.json(this.actions.getTask(req.params.id));
        })

        this.app.post('/task/:id', (req : express.Request, res : express.Response) : void => {
            res.json(this.actions.closeTask(req.params.id));
        })
    }
}

export default Router;