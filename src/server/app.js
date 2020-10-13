"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routing_1 = __importDefault(require("./routing"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3000;
        this.app = express_1.default();
        this.router = new routing_1.default(this.app);
    }
    Server.prototype.run = function () {
        this.router.route();
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
