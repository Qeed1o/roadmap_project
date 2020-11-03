"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(name) {
        this.name = name;
        this.timeStart = new Date();
        this.timeEnd = new Date(0);
        this.id = Math.random().toString(26).slice(2);
        this.isClosed = false;
    }
    Task.prototype.close = function () {
        this.timeEnd = new Date();
        this.isClosed = true;
    };
    return Task;
}());
exports.default = Task;
