import {Request, Response} from 'express';

import Actions from '../Actions/actions'
import PathDTO from '../DTO/PathDTO'

const taskListWorker: Actions = new Actions();

export const GET_ROUTES: PathDTO[] = [
        {
            path: '/',
            action: (req: Request, res: Response) => taskListWorker.getAllTasks(res),
        },
        {
            path: '/:id',
            action: (req: Request, res: Response) => taskListWorker.getTaskById(req, res),
        },
    ]
export const POST_ROUTES: PathDTO[] = [
        {
            path: '/create/:name',
            action: (req: Request, res: Response) => taskListWorker.createTask(req, res),
        },
        {
            path: '/close/:id',
            action: (req: Request, res: Response) => taskListWorker.closeTaskById(req, res),
        }
    ]