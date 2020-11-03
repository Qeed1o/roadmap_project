import express, {Request, Response} from 'express'
import {GET_ROUTES, POST_ROUTES} from './paths'
import PathDTO from '../DTO/PathDTO'

const mainRouter = express.Router()

const fillGETRequests = ({path, action }: PathDTO) =>
                            mainRouter.get(`${path}`, (req: Request, res: Response) => action(req, res))
                            
const fillPOSTRequests = ({path, action }: PathDTO) =>
                            mainRouter.post(`${path}`, (req: Request, res: Response) => action(req, res))

GET_ROUTES.map(fillGETRequests)
POST_ROUTES.map(fillPOSTRequests)


export default mainRouter