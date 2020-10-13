import express, { response } from 'express';
import Actions from '../Actions/actions';

class Router{
    private app : express.Application;
    private actions: Actions = new Actions();
    constructor(app : express.Application){
        this.app = app;
    }

    route(){
        // Returns json of all tasks by GET /
        this.app.get('/', (req : express.Request, res : express.Response) : void => {
            res.json(this.actions.getTaskList()); 
        });

        /**
         * Create a new task by name
         * 
         * POST data: (string)name
         * Response: (object)task
         */
        this.app.post('/task/create/:name', (req : express.Request, res : express.Response) : void => {
            const task = this.actions.newTask(req.params.name);
            const response = {
                id: task.getId(),
                name : task.getName(),
                closed: task.isClosed(),
            }
            res.json(response);
        })

        /**
         * Get task by id
         * 
         * Response: (object)task
         */
        this.app.get('/task/:id', (req : express.Request, res : express.Response) : void => {
            res.json(this.actions.getTask(req.params.id));
        })

        /**
         * Close task by id
         * 
         * POST data: (int)id
         * Response: (object)task
         */
        this.app.post('/task/:id', (req : express.Request, res : express.Response) : void => {
            res.json(this.actions.closeTask(req.params.id));
        })
    }
}

export default Router;