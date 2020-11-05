import express from 'express';
import mainRouter from '../Routing/MainRouter'

class Server{
    private app : express.Application;
    private port: number = 3001;

    constructor(){
        this.app = express();

        this.app.all('/*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            res.header("Content-Type", "application/json");
            next();
        });

        this.app.set('json spaces', 2)
        this.app.use(mainRouter);
    }

    run(){
        this.app.listen(this.port, function () {
            console.log("Listen...");
        });
    }

    getPort(){
        return this.port;
    }
}

export default Server;
