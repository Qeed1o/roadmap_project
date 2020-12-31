import express, {Request, Response} from 'express'
import {paths, GET, POST, PUT, DELETE} from './paths'
import PathDTO from '../DTO/PathDTO'

const mainRouter = express.Router()

paths.map(({method, path, action} : PathDTO) => {
    switch (method){
        case GET:
            mainRouter.get(`${path}`, (req: Request, res: Response) => action(req,res))
            break;
        
        case POST:
            mainRouter.post(`${path}`, (req: Request, res: Response) => action(req,res))
            break;

        case PUT:
            mainRouter.put(`${path}`, (req: Request, res: Response) => action(req,res))
            break;

        case DELETE:
            mainRouter.delete(`${path}`, (req: Request, res: Response) => action(req,res))
            break;

        default:
            console.error(`Wrong route for ${path}`)
            break;
    }
})


export default mainRouter