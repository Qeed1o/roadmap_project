import express, {Request, Response} from 'express'
import {paths, GET, POST} from './paths'
import PathDTO from '../DTO/PathDTO'

const mainRouter = express.Router()

paths.map((path: PathDTO) => {
    path.method === GET ?
        mainRouter.get(`${path.path}`, (req: Request, res: Response) => path.action(req,res))
        : mainRouter.post(`${path.path}`, (req: Request, res: Response) => path.action(req,res))
})


export default mainRouter