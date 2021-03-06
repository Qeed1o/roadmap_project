import {Request, Response} from 'express';

import Actions from '../Actions/actions'
import PathDTO from '../DTO/PathDTO'

const taskListWorker: Actions = new Actions();

export const GET = "GET"
export const POST = "POST"
export const PUT = "PUT"
export const DELETE = "DELETE"

export const paths: PathDTO[] = [
        {
            method: GET,
            path: '/',
            action: (req: Request, res: Response) => taskListWorker.getAllTasks(res),
        },
        {
            method: GET,
            path: '/clear',
            action: (req: Request, res: Response) => taskListWorker.clearTasks(req, res),
        },
        {
            method: GET,
            path: '/:id',
            action: (req: Request, res: Response) => taskListWorker.getTaskById(req, res),
        },        
        {
            method: POST,
            path: '/create',
            action: (req: Request, res: Response) => taskListWorker.createTask(req, res),
        },
        {
            method: POST,
            path: '/task/:id',
            action: (req: Request, res: Response) => taskListWorker.updateTask(req, res),
        },
        {
            method: POST,
            path: '/delete/:id',
            action: (req: Request, res: Response) => taskListWorker.deleteTaskById(req, res)
        }
    ]