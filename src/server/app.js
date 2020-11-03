"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MainRouter_1 = __importDefault(require("../Routing/MainRouter"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3001;
        this.app = express_1.default();
        this.app.all('/*', function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Content-Type", "application/json");
            next();
        });
        this.app.set('json spaces', 2);
        this.app.use(MainRouter_1.default);
    }
    Server.prototype.run = function () {
        this.app.listen(this.port, function () {
            console.log("Listen...");
        });
    };
    Server.prototype.getPort = function () {
        return this.port;
    };
    return Server;
}());
exports.default = Server;
