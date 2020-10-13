"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(name) {
        this.name = name;
        this.timeStart = new Date();
        this.timeEnd = new Date();
        this.id = Math.random().toString(26).slice(2);
        this.closed = false;
    }
    Task.prototype.getName = function () {
        return this.name;
    };
    Task.prototype.getTimeStart = function () {
        return this.timeStart;
    };
    Task.prototype.getId = function () {
        return this.id;
    };
    Task.prototype.setTimeEnd = function (timeEnd) {
        this.timeEnd = timeEnd;
        this.closed = true;
    };
    Task.prototype.isClosed = function () {
        return this.closed;
    };
    return Task;
}());
exports.default = Task;
